import React from "react";
import s from '../myFriends.module.css'

type PropsType= {
    img:string
    name:string
}

const Friend:React.FC<PropsType> = (props) => {
    return (
        <div className={s.friendWrapper}>
            <div className={s.friendImg}>
                <img src={props.img}/>
            </div>
            <div className={s.friendTitle}>
                <span>{props.name}</span>
            </div>
        </div>
    )
}

export default Friend;