const SEND_MESSAGE = 'SEND_MESSAGE';

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
}

export type InitialStateType = typeof initialState

const dialogsReducer = (state = initialState, action:any) => {
    switch (action.type) {
        case SEND_MESSAGE:
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

type SendMessageCreatorACType ={
    type:typeof SEND_MESSAGE,
    newMessage:string
}

export let sendMessageCreator = (newMessage :string):SendMessageCreatorACType => {
    return {type: SEND_MESSAGE,newMessage}
}

export default dialogsReducer;