import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData=[
        {post:'hou are you?' , likesCount:12},
        {post:'nice to me to you!' , likesCount:1}
    ]

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post post={postsData[0].post} likesCount={postsData[0].likesCount} />
                <Post post={postsData[1].post} likesCount={postsData[1].likesCount} />
            </div>
        </div>
    )
}

export default MyPosts;