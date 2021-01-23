const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';

const dialogsReducer = (state, action) => {
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