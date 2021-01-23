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
    newMessageBody: ''
}

const dialogsReducer = (state = initialStore, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case SEND_MESSAGE:
           state.messages.push({id: 6, message: state.newMessageBody},);
           state.newMessageBody = '';
            return state;
        default:
            return state;
    }
}

export let updateNewMessageBodyCreator = (body) => {
    return {type: UPDATE_NEW_MESSAGE_BODY, body: body}
}
export let sendMessageCreator = () => {
    return {type: SEND_MESSAGE}
}

export default dialogsReducer;