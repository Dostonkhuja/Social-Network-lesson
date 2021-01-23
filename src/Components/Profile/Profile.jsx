import React from "react";
import s from './profile.module.css'
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContaiener";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;