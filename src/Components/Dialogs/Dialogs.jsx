import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements =state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements=state.messages.map(m=> <Message message={m.message}/>)
    let newMesageBody=state.newMessageBody;

    const onMessageChange = (e)=> {
        let body= e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }
    const addNewMessage=()=>{
        props.store.dispatch(sendMessageCreator())
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