import React from "react";
import s from './nav.module.css'
import {NavLink} from "react-router-dom";
import MyFriends from "./MyFriends/MyFriends";

const Nav = (props) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.activeLink}> Profile </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.activeLink}> Dialogs </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/messages' activeClassName={s.activeLink}> Messages </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/news' activeClassName={s.activeLink}> News </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/music' activeClassName={s.activeLink}> Music </NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/settings' activeClassName={s.activeLink}> Settings </NavLink>
            </div>
            <MyFriends myFriends={props.navPage.myFriends}/>
        </nav>
    )
}

export default Nav;