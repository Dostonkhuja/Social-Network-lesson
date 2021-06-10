import React from 'react';
import s from "./myFriends.module.css";
import Friend from "./Friend/Friend";
import {MyFriendType} from "../../../redux/nav-reducer";

type PropsType ={
    myFriends:Array<MyFriendType>
}

const MyFriends:React.FC<PropsType> = (props) => {
    let friendElements = props.myFriends.map( f => <Friend name={f.name} img={f.img} key={f.id}/>)
    return (
        <div>
            <div className={s.myFriendsTitle}>
                <h3>My Friends</h3>
            </div>
            <div className={s.myFriendsWrapper}>
                {friendElements}
            </div>
        </div>
    );
}

export default MyFriends;