import React from 'react'
import {Pagination} from 'antd';
import User from "./User";
import style from './users.module.css'
import {UserType} from "../../types/types";
import {UsersSearchForm} from "./UserSearchForm";
import {FilterType} from "../../redux/users-reducer";


type PropsType = {
    currentPage:number,
    totalUsersCount:number,
    pageSize:number,
    onPageChanged:(pageNumber:number)=> void,
    onFilterChagned:(filter:FilterType)=> void,
    users:Array<UserType>,
    followingInProgress:Array<number>,
    unfollow:(userId:number)=>void,
    follow:(userid:number)=>void
}

const Users:React.FC<PropsType> = ({ currentPage, totalUsersCount, pageSize, onPageChanged,
                   users, followingInProgress, unfollow, follow, ...props
               }) => {
    return <div>

        <UsersSearchForm onFilterChagned={props.onFilterChagned} />

        <div className={style.pagination}>
            <Pagination showQuickJumper defaultCurrent={currentPage} total={totalUsersCount} onChange={onPageChanged} />
        </div>

        <div>
            {users.map(u => <User user={u} key={u.id}
                                  followingInProgress={followingInProgress}
                                  unfollow={unfollow}
                                  follow={follow}
            />)}
        </div>

    </div>
}



export default Users;






