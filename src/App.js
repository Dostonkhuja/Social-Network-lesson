import React from "react"
import './App.css';
import Nav from "./Components/Nav/Nav";
import {Route, withRouter} from "react-router-dom";
import UsersConteiner from "./Components/Users/UsersConteiner";
import HeaderContainer from "./Components/Header/HeaderContainer";
import {compose} from "redux";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./Components/common/preloader/Preloader";
import withSuspense from "./Components/HOC/withSuspense";

//Lazy import
const ProfileContainer = React.lazy(() => import("./Components/Profile/ProfileContainer"));
const DialogsContainer = React.lazy(() => import("./Components/Dialogs/DialogsContainer"));
const Login = React.lazy(() => import("./Components/Login/Login"));

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp()
    }
    render() {
        // if (!this.props.initialized) {
        //     return <Preloader/>
        // }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={withSuspense(DialogsContainer)}/>
                    <Route path='/profile/:userId?'
                           render={ withSuspense(ProfileContainer) } />
                    <Route path='/users'
                           render={() => <UsersConteiner/>}/>
                    <Route path='/login'
                           render={ withSuspense(Login)}/>
                </div>
            </div>
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
