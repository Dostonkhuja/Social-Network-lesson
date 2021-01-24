import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            { (store)=> {

                let state = store.getState().dialogsPage;
                const addNewMessage = () => {
                    store.dispatch(sendMessageCreator())
                }
                const onMessageChange = (body) => {
                   store.dispatch(updateNewMessageBodyCreator(body))
                }

                return  <Dialogs updateNewMessageBody={onMessageChange} sendMessage={addNewMessage} dialogsPage={state}/>
            }
        }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;