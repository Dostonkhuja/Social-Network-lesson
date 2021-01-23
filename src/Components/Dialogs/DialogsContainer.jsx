import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage;

    const addNewMessage = () => {
        props.store.dispatch(sendMessageCreator())
    }
    const onMessageChange = (body) => {
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }

    return (
        <Dialogs updateNewMessageBody={onMessageChange} sendMessage={addNewMessage} dialogsPage={state}/>
    )
}

export default DialogsContainer;