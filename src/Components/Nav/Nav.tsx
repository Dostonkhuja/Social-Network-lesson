import React from "react";
import s from './nav.module.css'
import {HashRouter, NavLink, Route} from "react-router-dom";
import {Layout, Menu} from "antd";
import {
    DesktopOutlined,
    MailOutlined,
    ProfileOutlined,
    SettingOutlined,
    SoundOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";

const { Sider } = Layout;
const { SubMenu } = Menu;

type PropsType = {

}
type StateType = {
    collapsed:boolean
}

class Nav extends React.Component<PropsType,StateType> {
    state = {
        collapsed: false,
    };
    onCollapse = (collapsed:boolean) => {
        this.setState({ collapsed });
    };
    render() {
        return (
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                <div className="logo">
                    <img className={"logo1"} src="http://pluspng.com/img-png/the-beatles-png-the-beatles-by-andreza0406-the-beatles-by-andreza0406-900.png"/>
                </div>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                    <Menu.Item key="1" icon={<ProfileOutlined />}>
                        <NavLink to='/profile' activeClassName={s.activeLink}> Profile </NavLink>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<MailOutlined />}>
                        <NavLink to='/dialogs' activeClassName={s.activeLink}> Messages </NavLink>
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UserSwitchOutlined />}>
                        <NavLink to='/users' activeClassName={s.activeLink}> Developers </NavLink>
                    </Menu.Item>
                    <Menu.Item key="4" icon={<DesktopOutlined />}>
                        <NavLink to='/news' activeClassName={s.activeLink}> News </NavLink>
                    </Menu.Item>
                    <Menu.Item key="5" icon={<SoundOutlined />}>
                        <NavLink to='/music' activeClassName={s.activeLink}> Music </NavLink>
                    </Menu.Item>
                    <Menu.Item key="6" icon={<SettingOutlined />}>
                        <NavLink to='/music' activeClassName={s.activeLink}> Settings </NavLink>
                    </Menu.Item>
                </Menu>
            </Sider>
        )
    }
}

export default Nav;



