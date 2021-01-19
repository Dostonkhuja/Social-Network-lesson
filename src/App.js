import React from "react"
import './App.css';
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Profile from "./Components/Profile/Profile";
import Dialogs from "./Components/Dialogs/Dialogs";
import  {Route,BrowserRouter} from "react-router-dom";

const App = (props)=> {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/dialogs' render={()=><Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
                    <Route path='/profile' render={()=><Profile postsData={props.postsData} />}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
