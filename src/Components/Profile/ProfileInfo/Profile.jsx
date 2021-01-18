import React from "react";
import s from './profileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img className={s.contentImg}
                     src="http://getwallpapers.com/wallpaper/full/7/0/9/1340311-abbey-road-wallpaper-3440x1440-for-macbook.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>
        </div>
    )
}

export default ProfileInfo;