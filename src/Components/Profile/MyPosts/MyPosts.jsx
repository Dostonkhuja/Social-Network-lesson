import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = (props) => {
    let postsElement=props.posts.map(p=> <Post post={p.post} likesCount={p.likesCount}/>)

    let newPostElement = React.createRef();

    const addPost = ()=>{
        let text = newPostElement.current.value;
         props.addPost(text);
        newPostElement.current.value='';
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
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