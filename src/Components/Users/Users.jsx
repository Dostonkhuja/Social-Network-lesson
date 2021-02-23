import React from 'react'
import { Pagination } from 'antd';
import User from "./User";
import style from './users.module.css'

const Users = ({ currentPage, totalUsersCount, pageSize, onPageChanged,
                   users, followingInProgress, unfollow, follow, ...props
               }) => {
    return <div>
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






