import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddNewMessageForm} from "./AddMessageForm/AddMessageForm";

const Dialogs = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const addNewMessage = (values) => {
        props.sendMessage(values.onAddMessage);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messageElements}
            </div>
            <AddNewMessageForm onSubmit={addNewMessage} />
        </div>
    )
}

export default Dialogs;