import React from 'react';
import s from './Profile.module.css'
import Profile from './Profile';
import {getStatus, getUserProfile, savePhoto, saveProfile, updateStatus} from '../../redux/profile-reducer';
import {connect} from 'react-redux';
import withRouter from './withRouter';
import {compose} from 'redux';

class ProfileContainer extends React.Component {
    
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }
    
    componentDidMount() {
        this.refreshProfile();
    }
    
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }
    
    render() {
        return (
          <div className={s.content}>
              <Profile {...this.props}
                       profile={this.props.profile}
                       status={this.props.status}
                       updateStatus={this.props.updateStatus}
                       isOwner={!this.props.match.params.userId}
                       savePhoto={this.props.savePhoto}
              />
          </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth
    }
};

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto, saveProfile}),
  withRouter,
)(ProfileContainer)
