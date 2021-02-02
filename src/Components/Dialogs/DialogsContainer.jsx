import React from 'react'
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

let mapStateToProps=(state)=>{
    return {
        dialogsPage:state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
        updateNewMessageBody: (body)=> {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage: ()=>{
            dispatch(sendMessageCreator())
        }
    }
}

let AuthRedirectContainer = withAuthRedirect(Dialogs);
const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(AuthRedirectContainer);

export default DialogsContainer;