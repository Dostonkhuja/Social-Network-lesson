import React from "react";
import s from './header.module.css'
import {NavLink} from "react-router-dom";
import {UserOutlined} from "@ant-design/icons";
import {Button} from "antd";

type PropsType = {
    isAuth:boolean
    login:string | null
    logout:()=> void
}

const Header:React.FC<PropsType> = (props) => {
    return (
        <header className={s.header}>
                <div className={s.loginBlock}>
                    <div className={s.userIcon}> <UserOutlined /> </div>
                    {props.isAuth
                        ? <div> <span className={s.loginName}>{props.login}</span> <Button  onClick={props.logout}>log out</Button></div>
                        :<NavLink to={'/login'}>Login</NavLink>}
                </div>
        </header>
    )
}

export default Header;