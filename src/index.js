import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogsData=[
    { name:"Doston" , id:1 },
    { name:"Alisher" , id:2 },
    { name:"Sveta" , id:3 },
    { name:"Bahtiyor" , id:4 },
    { name:"Davron" , id:5 }
]

let messagesData=[
    {id:1 , message:'Hi'},
    {id:2 , message:'How are you'},
    {id:3 , message:'Yo'},
    {id:4 , message:'Yo'},
    {id:5 , message:'Yo'}
]

let postsData=[
    {post:'hou are you?' , likesCount:12},
    {post:'nice to me to you!' , likesCount:1}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogsData={dialogsData} messagesData={messagesData} postsData={postsData} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
