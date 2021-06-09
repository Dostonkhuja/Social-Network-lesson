import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContaiener";
import {ProfileType} from "../../types/types";

type PropsType = {
    savePhoto:(file:any)=> void
    isOwner :boolean
    profile : ProfileType
    status :string
    updateStatus: (newStatus:string)=> void
    saveProfile :(profile:ProfileType)=> void
}

const Profile:React.FC<PropsType> = (props) => {
    return (
        <div>
            <ProfileInfo
                savePhoto={props.savePhoto}
                isOwner={props.isOwner}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                saveProfile={props.saveProfile}
            />
            <MyPostsContainer />
        </div>
    )
}

export default Profile;