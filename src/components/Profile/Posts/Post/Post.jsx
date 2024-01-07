import React from 'react';
import s from './Post.module.css'

function Post(props) {
	return (
		<div className={s.item}>
			<img src="https://i.pinimg.com/736x/fd/ff/84/fdff84352a22d4954f961d1fbcadfccc.jpg" alt="ava"/>
			{props.messages}
			<div>
				<span>like</span> {props.likesCount}
			</div>
		</div>

	);
}

export default Post;