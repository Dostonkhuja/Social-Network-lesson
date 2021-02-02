import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)
    let newMesageBody = state.newMessageBody;

    const onMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body)
    }
    const addNewMessage = () => {
        props.sendMessage();
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <textarea onChange={onMessageChange} value={newMesageBody}></textarea>
            </div>
            <div>
                <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;