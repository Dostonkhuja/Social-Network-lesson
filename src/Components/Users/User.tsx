import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/New_user.png'
import {NavLink} from "react-router-dom";
import {Button} from "antd";
import {UserType} from "../../types/types";

type PropsType = {
    user:UserType
    followingInProgress:Array<number>
    unfollow:(userId:number)=>void
    follow:(userId:number)=>void
}

const User:React.FC<PropsType> = ({user, followingInProgress, unfollow, follow}) => {
    return ( <div className={s.userBlock}>
                    <span>
                        <div>
                            <NavLink to={`/profile/${user.id}`}>
                            <img src={user.photos.small != null ? user.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                    </span>
                    <span>
                        <div>{user.name}</div>
                    </span>
                    <span>
                        <div>{user.status}</div>
                        {/*<div>{'user.location.country'}</div>*/}
                        {/*<div>{'user.location.city'}</div>*/}
                    </span>
                     <div>
                {user.followed
                    ? <Button disabled={followingInProgress.some(id=> id === user.id)}
                              onClick={() => {unfollow(user.id)}}>Unfollow</Button>
                    : <Button disabled={followingInProgress.some(id=> id === user.id)}
                              onClick={() => {follow(user.id)}}>Follow</Button>}
            </div>
                </div>
    )
}

export default User;






