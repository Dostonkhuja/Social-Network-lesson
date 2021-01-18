import React from "react";
import s from './Post.module.css'

const Post = (props) => {
    return (
            <div className={s.item}>
                <img src="https://tse4.mm.bing.net/th?id=OIP.JYpx8CxzpDll_iTTzaZIPgAAAA&pid=Api&P=0&w=300&h=300"/>
                {props.post}
                <p>like {props.likesCount}</p>
            </div>
    )
}

export default Post;