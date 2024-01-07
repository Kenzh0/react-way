import React from 'react';
import s from './Profile.module.css'
import ProfileInfo from './Profileinfo/ProfileInfo';
import MyPostsContainer from './Posts/MyPostsContainer';

function Profile(props) {
	return (
		<div className={s.content}>
			<ProfileInfo savePhoto={props.savePhoto}
			             saveProfile={props.saveProfile}
			             isOwner={props.isOwner}
			             profile={props.profile}
			             status={props.status}
			             updateStatus={props.updateStatus}/>
			<MyPostsContainer />
		</div>
	);
}

export default Profile;