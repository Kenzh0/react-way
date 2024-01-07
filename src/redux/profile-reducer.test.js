import profileReducer, {addPostActionCreator} from "./profile-reducer";
import React from "react";

let state = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 7},
        {id: 2, message: 'It\'s my first project)', likesCount: 42}
    ]
};
it('length of post should be increment', () => {
    let action = addPostActionCreator("test test test");

    let newState = profileReducer(state, action)
    
    expect(newState.posts.length).toBe(3);
    expect(newState.posts[0].message).toBe('Hi, how are you?');
});