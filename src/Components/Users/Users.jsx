import React from 'react'
import s from './users.module.css'
import userPhoto from '../../assets/images/New_user.png'
import {NavLink} from "react-router-dom";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {pages.push(i)}

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                                 onClick={(e) => {props.onPageChanged(p);}}> {p} </span>})}
            </div>

            {props.users.map(u =>
                    <div key={u.id}>
                    <span>
                        <div>
                            <NavLink to='/profile'>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} className={s.userPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button>
                                : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                        </div>
                    </span>
                    <span>
                        <div>{u.name}</div>
                    </span>
                    <span>
                        <div>{u.status}</div>
                        <div>{'u.location.country'}</div>
                        <div>{'u.location.city'}</div>
                    </span>
                </div>)}
        </div>
    )
}

export default Users;






