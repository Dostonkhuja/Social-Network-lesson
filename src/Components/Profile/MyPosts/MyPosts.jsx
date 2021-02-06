import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {
    let postsElement = props.posts.map(p => <Post post={p.post} likesCount={p.likesCount} key={p.id}/>)

    const onAddPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={s.postBlock}>
            <div>
                <h3>My posts</h3>
            </div>
            <AddPostReduxForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}

const AddPostForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field name={'newPostText'} component='textarea' />
        </div>
        <div>
            <button>Add Post</button>
        </div>
    </form>;
}

const AddPostReduxForm = reduxForm({form:'ProfileAddPostReduxForm'})(AddPostForm)

export default MyPosts;