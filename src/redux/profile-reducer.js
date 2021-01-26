const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_POST_TEXT';

let initialState= {
    posts: [
        {id: 1, post: 'hou are you?', likesCount: 12},
        {id: 2, post: 'nice to me to you!', likesCount: 1},
    ],
    newPostText: "Assalomu-Alaykum"
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = { id: 3, post: state.newPostText, likesCount: 0 }
            return {
                ...state,
                posts : [...state.posts, newPost ],
                newPostText:''
            };
        case UPDATE_NEW_TEXT_POST: {
            return {
                ...state,
                newPostText:action.newText
            }
        }
        default:
            return state;
    }
}

export let addPostActionCreator = () => {
    return {type: ADD_POST}
}
export let updateNewPostTextActionCreator = (text) => {
    return {type: UPDATE_NEW_TEXT_POST, newText: text}
}

export default profileReducer;

