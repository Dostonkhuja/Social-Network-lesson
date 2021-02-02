import React from "react"
import './App.css';
import Nav from "./Components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersConteiner from "./Components/Users/UsersConteiner";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import Login from "./Components/Login/Login";

const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <Nav/>
            <div className="app-wrapper-content">
                <Route path='/dialogs'
                       render={() => <DialogsContainer/>}/>
                <Route path='/profile/:userId?'
                       render={() => <ProfileContainer/>}/>
                <Route path='/users'
                       render={() => <UsersConteiner/>}/>
                <Route path='/login'
                       render={() => <Login />}/>
            </div>
        </div>
    );
}

export default App;
