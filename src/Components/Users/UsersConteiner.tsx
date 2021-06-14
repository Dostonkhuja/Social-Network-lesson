import React from 'react'
import s from './users.module.css'
import {FilterType} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import {getIsFetching} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {useSelector} from "react-redux";
import {Users} from "./Users";



type UsersPagePropsType = {}

export const UsersPage:React.FC<UsersPagePropsType> = (props)=>{
    const isFetching = useSelector(getIsFetching)
    return <div className={s.userContainer}>
        {isFetching ?  <div className={s.preLoaderUsers}> <Preloader/> </div> : null}
        <Users />
    </div>
}






