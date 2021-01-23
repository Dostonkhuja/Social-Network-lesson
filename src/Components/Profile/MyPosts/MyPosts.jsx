import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {addPostActionCreator, updateNewPostText} from "../../../redux/profile-reducer";

const MyPosts = (props) => {
    let postsElement=props.posts.map(p=> <Post post={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    const addPost = ()=>{
         // props.addPost();
        props.dispatch(addPostActionCreator())
    }

    const onPostChange= ()=> {
        let text = newPostElement.current.value;
        // props.updateNewPostText(text);
        props.dispatch(updateNewPostText(text))
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText} />
                </div>
                <div>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

export default MyPosts;