import React from 'react'
import s from './dialogs.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = "dialogs/" + props.id
    return (
        <div className={s.dialog + ' ' + s.active}><NavLink to={path}>{props.name}</NavLink></div>
    )
}

const Message = (props) => {
 return(
     <div className={s.dialog}> {props.message} </div>
 )
}

const Dialogs = (props) => {

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

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
            </div>
            <div className={s.messages}>
                <Message message={messagesData[0].message}/>
                <Message message={messagesData[1].message}/>
            </div>
        </div>
    )
}

export default Dialogs;