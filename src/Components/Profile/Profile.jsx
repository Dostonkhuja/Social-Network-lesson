import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/Profile";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPosts postsData={props.postsData}/>
        </div>
    )
}

export default Profile;