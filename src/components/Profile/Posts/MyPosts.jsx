import React from 'react';
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {AddPostReduxForm} from "./AddPostForm";

const MyPosts = React.memo(props => {
    console.log("Render")
    console.log(props)
    let postsElements = props.posts.map(p => <Post messages={p.message} likesCount={p.likesCount}/>)
    
    // let newPostElement = React.createRef();
    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }
    
    return (
      <div className={s.postsBlock}>
          <h3>My post</h3>
          <AddPostReduxForm onSubmit={addNewPost}/>
          <div className={s.posts}>
              {postsElements}
          </div>
      </div>
    );
})

export default MyPosts;