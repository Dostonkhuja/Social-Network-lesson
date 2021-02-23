import React from "react"
import './App.css';
import Nav from "./Components/Nav/Nav";

import {HashRouter, NavLink, Route, withRouter} from "react-router-dom";
import UsersConteiner from "./Components/Users/UsersConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import withSuspense from "./Components/HOC/withSuspense";

import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;



//Lazy import
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }

    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        this.setState({ collapsed });
    };

    render() {
        //  if (!this.props.initialized) {
        //     return <Preloader/>
        // }
        return (<HashRouter>

            <Layout style={{ minHeight: '100vh' }}>
               <Nav/>
                <Layout className="site-layout">
                    <HeaderContainer className="site-layout-background" style={{ padding: 0 }} />
                    <Content style={{ margin: '0 16px' }}>
                        <Route path='/dialogs'
                                     render={withSuspense(DialogsContainer)}/>
                        <Route path='/profile/:userId?'
                                     render={ withSuspense(ProfileContainer) } />
                                <Route path='/users'
                                     render={() => <UsersConteiner/>}/>
                                <Route path='/login'
                                       render={ withSuspense(Login)}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>SamuraiJs-social-network 2021. Developer: Sheraliyev D.</Footer>
                </Layout>
            </Layout>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized :state.app.initialized
})

export default compose(
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
