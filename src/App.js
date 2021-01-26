import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import Users from "./Components/Users/Users";
import UsersConteiner from "./Components/Users/UsersConteiner";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/profile' render={() => <Profile />} />
                    <Route path='/users' render={() => <UsersConteiner />} />
                </div>
            </div>
    );
}

export default App;
