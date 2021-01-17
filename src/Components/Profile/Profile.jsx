import React from "react";
import s from './profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img className={s.contentImg}
                     src="http://getwallpapers.com/wallpaper/full/7/0/9/1340311-abbey-road-wallpaper-3440x1440-for-macbook.jpg"/>
            </div>
            <div>
                ava + description
            </div>
            <MyPosts/>
        </div>

    )
}

export default Profile;