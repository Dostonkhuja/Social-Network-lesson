const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

let initialStore = {
    dialogs: [
        {name: "Doston", id: 1},
        {name: "Alisher", id: 2},
        {name: "Sveta", id: 3},
        {name: "Bahtiyor", id: 4},
        {name: "Davron", id: 5}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ],
}

const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body=action.newMessage
            return {
                ...state,
                newMessageBody: '',
                messages: [...state.messages, {id: 6, message: body}]
            }
        default:
            return state;
    }
}

export let sendMessageCreator = (newMessage) => {
    return {type: SEND_MESSAGE,newMessage}
}

export default dialogsReducer;