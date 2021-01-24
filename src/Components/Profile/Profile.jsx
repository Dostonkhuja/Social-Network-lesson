import React from "react";
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContaiener";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;