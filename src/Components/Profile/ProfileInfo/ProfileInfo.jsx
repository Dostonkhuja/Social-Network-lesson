import React from "react";
import s from './profileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHook from "./ProfileStatusWithHook";
import userPhoto from '../../../assets/images/New_user.png'

const ProfileInfo = ({profile,status,updateStatus,isOwner,savePhoto}) => {
    if (!profile) {return <Preloader />}

    const mainPhotoSelected = (e)=> {
        if (e.target.files.length){
            savePhoto(e.target.files[0])
        }
    }

    return (
        <div>
            <div className={s.descriptionBlock}>
                <div>
                    <img src={profile.photos.large || userPhoto} className={s.mainPhoto} />
                    {isOwner && <input type={"file"} onChange={mainPhotoSelected}/>}
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