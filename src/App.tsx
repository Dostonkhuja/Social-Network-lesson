import React from "react"
import './App.css';
import Nav from "./Components/Nav/Nav";

import {BrowserRouter, HashRouter, Route, withRouter} from "react-router-dom";
import  {UsersPage} from "./Components/Users/UsersConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {compose} from "redux";
import {connect, Provider} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import withSuspense from "./Components/HOC/withSuspense";

import 'antd/dist/antd.css'
import { Layout, Menu, Breadcrumb } from 'antd';
import store, {AppStateType} from "./redux/redux-store";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

//Lazy import
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));
const ChatPage = React.lazy(() => import("./Components/pages/chat/ChatPage"))

const SuspendedDialgos = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)
const SuspendedChatPage = withSuspense(ChatPage)
const SuspendedLogin = withSuspense(Login)

type StateType ={
    collapsed:boolean
}

type OwnPropsType ={}

type MapStateType = ReturnType<typeof mapStateToProps>
type MapDispatchType = {
    initializeApp:()=>void
}


type PropsType  = OwnPropsType  & MapStateType & MapDispatchType

class App extends React.Component<PropsType,StateType> {
    componentDidMount() {
        this.props.initializeApp()
    }
    state = {
        collapsed: false,
    };

    onCollapse = (collapsed:boolean) => {
        this.setState({ collapsed });
    };

    render() {
        return (<HashRouter>

            <Layout style={{ minHeight: '100vh' }}>
               <Nav/>
                <Layout className="site-layout">
                    <div className ="site-layout-background">
                        <HeaderContainer />
                    </div>
                    <Content style={{ margin: '0 16px' }}>
                        <Route path='/dialogs'
                                     render={()=><SuspendedDialgos/>} />
                        <Route path='/profile/:userId?'
                                     render={()=> <SuspendedProfile/> } />
                                <Route path='/users'
                                     render={() => <UsersPage />}/>
                                <Route path='/login'
                                       render={()=> <SuspendedLogin /> }/>
                                <Route path='/chat'
                                       render={()=> <SuspendedChatPage/> }/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>SamuraiJs-social-network 2021. Developer: Sheraliyev D.</Footer>
                </Layout>
            </Layout>
            </HashRouter>
        );
    }
}

const mapStateToProps = (state:AppStateType) => ({
    initialized :state.app.initialized
})

let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)

const SamuraiJSApp: React.FC = () => {
    return <BrowserRouter>
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    </BrowserRouter>
}

export default SamuraiJSApp