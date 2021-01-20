import React from 'react'
import s from './dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {

    let dialogsElements =props.dialogsPage.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>)
    let messageElements=props.dialogsPage.messages.map(m=> <Message message={m.message}/>)

    let newMessageElemet=React.createRef();

    const addNewMessage=()=>{
        let newMessage=newMessageElemet.current.value;
        return(
            alert(newMessage)
        )
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
                <textarea ref={newMessageElemet}></textarea>
            </div>
            <div>
                <button onClick={addNewMessage}>send</button>
            </div>
        </div>
    )
}

export default Dialogs;