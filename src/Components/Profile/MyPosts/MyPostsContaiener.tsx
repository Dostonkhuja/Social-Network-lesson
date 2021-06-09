import React from "react";
import {actions} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";
import {PostType} from "../../../types/types";

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: (newPostText: string) => void
}
type OwnPropsType = {}
type PropsType = {}

let mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (newPostText: string) => {
            dispatch(actions.addPostActionCreator(newPostText))
        }
    }
}

let MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;