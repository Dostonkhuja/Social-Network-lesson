import React from "react";
import s from './profileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";

const ProfileInfo = ({profile,status,updateStatus}) => {
    if (!profile) {return <Preloader />}

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large} />
                    <h3>{profile.fullName}</h3>

                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>

                    <h3><i>{profile.aboutMe}</i></h3>
                    <a href={profile.github}></a>
                    <span>{profile.lookingForAJob ? <img src="http://www.animatedgif.net/sitemessages/search/w-search_ani_e0.gif"/> :''}</span>
                    <p>{profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;