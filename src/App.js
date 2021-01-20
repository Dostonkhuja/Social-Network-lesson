import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import {Route} from "react-router-dom";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Nav navPage={props.state.navPage} />
                <div className="app-wrapper-content">
                    <Route path='/dialogs'
                           render={() =>
                               <Dialogs dialogsPage={props.state.dialogsPage} />}
                    />
                    <Route path='/profile'
                           render={() =>
                               <Profile profilePage={props.state.profilePage} addPost={props.addPost} />}
                    />
                </div>
            </div>
    );
}

export default App;
