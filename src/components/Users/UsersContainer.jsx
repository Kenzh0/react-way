import React, {Fragment} from 'react';
import {connect} from "react-redux";
import {
    follow, requestUsers,
    setCurrentPage, toggleFollowingProgress,
    unfollow
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers,
} from "../../redux/users-selectors";

class UsersContainer extends React.Component {
    componentDidMount() {
        const {currentPage, pageSize} = this.props
        this.props.getUsers(currentPage, pageSize)
    }
    
    onChangePage = (pageNumber) => {
        const {pageSize} = this.props
        this.props.getUsers(pageNumber, pageSize)
    }
    
    render() {
        return <Fragment>
            {this.props.isFetching ? <Preloader/> : null}
            <Users {...this.props} onChangePage={this.onChangePage.bind(this)} />
            {/*<Users totalUsersCount={this.props.totalUsersCount}*/}
            {/*       pageSize={this.props.pageSize}*/}
            {/*       currentPage={this.props.currentPage}*/}
            {/*       onPageChanged={this.onPageChanged}*/}
            {/*       users={this.props.users}*/}
            {/*       follow={this.props.follow}*/}
            {/*       unfollow={this.props.unfollow}*/}
            {/*       followingInProgress={this.props.followingInProgress}/>*/}
        </Fragment>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
  connect(mapStateToProps, {follow, setCurrentPage, unfollow, toggleFollowingProgress, getUsers: requestUsers}),
)(UsersContainer)