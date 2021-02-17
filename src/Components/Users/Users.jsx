import React from 'react'
import s from './users.module.css'
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged,
                   users, followingInProgress, unfollow, follow, ...props
               }) => {
    return <div>

        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>

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






