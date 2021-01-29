import React from "react";
import ProfileInfo from "./ProfileInfo/Profile";
import MyPostsContainer from "./MyPosts/MyPostsContaiener";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer />
        </div>
    )
}

export default Profile;