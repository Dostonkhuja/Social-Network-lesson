import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {AddNewMessageForm} from "./AddMessageForm/AddMessageForm";
import {InitialStateType} from "../../redux/dialogs-reducer";


export type NewMesageFormValuesType = {
    email: string
    password:string
    rememberMe:boolean
    onAddMessage:string
}


type PropsType= {
    dialogsPage:InitialStateType
    sendMessage:(messageText:string)=> void
}

const Dialogs:React.FC<PropsType> = (props) => {
    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id} key={d.id}/>)
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>)

    const addNewMessage = (values:NewMesageFormValuesType) => {
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