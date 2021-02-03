import React from "react";
import s from './profileInfo.module.css'
import Preloader from "../../common/preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    if (!props.profile) {return <Preloader />}

    return (
        <div>
            {/*<div>*/}
            {/*    <img className={s.contentImg}*/}
            {/*         src="http://getwallpapers.com/wallpaper/full/7/0/9/1340311-abbey-road-wallpaper-3440x1440-for-macbook.jpg"/>*/}
            {/*</div>*/}
            <div className={s.descriptionBlock}>
                <div>
                    <img src={props.profile.photos.large} />
                    <h4>{props.profile.fullName}</h4>
                    <ProfileStatus status={'hello my friends'}/>
                    {/*<h3><i>{props.profile.aboutMe}</i></h3>*/}
                    <a href={props.profile.github}></a>
                    <span>{props.profile.lookingForAJob ? <img src="http://www.animatedgif.net/sitemessages/search/w-search_ani_e0.gif"/> :''}</span>
                    <p>{props.profile.lookingForAJobDescription}</p>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;