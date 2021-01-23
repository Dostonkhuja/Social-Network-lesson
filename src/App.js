import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import {Route} from "react-router-dom";
import DialogsContainer from "./Components/Dialogs/DialogsContainer";

const App = (props) => {
    return (
            <div className='app-wrapper'>
                <Header />
                <Nav store={props.store} />
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={() => <DialogsContainer store={props.store} />} />
                    <Route path='/profile' render={() => <Profile store={props.store} />} />
                </div>
            </div>
    );
}

export default App;
