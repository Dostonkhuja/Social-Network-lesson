import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post";
import {maxLengthCreator} from "../../../utils/validators/validators";
import { AddPostFormValuesType, AddPostReduxForm} from "./AddPostForm/AddPostForm";
import {PostType} from "../../../types/types";

const maxLength10 = maxLengthCreator(10)

export type MapPropsType = {
    posts:Array<PostType>
}
export type DispatchPropsType = {
    addPost:(newPostText:string) => void
}

const MyPosts:React.FC<MapPropsType & DispatchPropsType> = (props) => {
    let postsElement = props.posts.map(p => <Post key={p.id} post={p.post} likesCount={p.likesCount} />)

    const onAddPost = (values: AddPostFormValuesType) => {
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


const MyPostsMemoized =React.memo(MyPosts);


export default MyPostsMemoized;