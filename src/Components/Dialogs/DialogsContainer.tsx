import React from 'react'
import {actions} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose} from "redux";
import {withAuthRedirect} from "../HOC/withAuthRedirect";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType = {

}

type MapDispatchPropsType = {
    sendMessage:(newMessage:string)=> void
}

type OwnProps = {}

let mapStateToProps=(state:AppStateType):MapStatePropsType=>{
    return {
        dialogsPage:state.dialogsPage
    }
}


export default compose<React.ComponentType>(
    connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps,{...actions}),
    withAuthRedirect
)(Dialogs)

