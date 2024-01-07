import React, {Fragment} from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

let Users = ({totalUsersCount, pageSize, currentPage, onChangePage, users, ...props}) => {
    return (
      <Fragment>
          <Paginator totalItemsCount={totalUsersCount}
                     pageSize={pageSize}
                     currentPage={currentPage}
                     onChangePage={onChangePage}
          />
          <div>
              {
                  users.map(u => <User user={u} key={u.id}
                                       followingInProgress={props.followingInProgress}
                                       unfollow={props.unfollow}
                                       follow={props.follow}
                  />)
              }
          </div>
      </Fragment>
    )
};

export default Users;