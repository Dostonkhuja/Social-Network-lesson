import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";
import UsersConteiner from "./Components/Users/UsersConteiner";
import ProfileContainer from "./Components/Profile/ProfileContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Nav />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer />} />
                    <Route path='/profile' render={() => <ProfileContainer />} />
                    <Route path='/users' render={() => <UsersConteiner />} />
                </div>
            </div>
    );
}

export default App;
