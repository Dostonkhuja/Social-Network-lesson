import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {FormAction} from "redux-form";

type DialogType = {
    id:number
    name:string
}
type MessageType = {
    id:number
    message:string
}

let initialState = {
    dialogs: [
        {name: "Doston", id: 1},
        {name: "Alisher", id: 2},
        {name: "Sveta", id: 3},
        {name: "Bahtiyor", id: 4},
        {name: "Davron", id: 5}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ] as Array <MessageType>,

    newMessageBody:''
}


const dialogsReducer = (state = initialState, action:ActionType):InitialStateType => {
    switch (action.type) {
        case 'SN/DIALOGS/SEND_MESSAGE':
            let body=action.newMessage
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}],
            }
        default:
            return state;
    }
}

export let actions = {
    sendMessage : (newMessage :string) => {
        return {type: 'SN/DIALOGS/SEND_MESSAGE',newMessage}
    }
}

export default dialogsReducer;

export type InitialStateType = typeof initialState
type ActionType =InferActionsTypes< typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>