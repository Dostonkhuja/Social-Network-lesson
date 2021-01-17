import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <Nav />
            <div className="app-wrapper-content">
                <Dialogs />
                {/*<Profile />*/}
            </div>
        </div>
    );
}

export default App;
