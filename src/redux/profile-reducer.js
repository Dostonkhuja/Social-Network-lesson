import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE_NEW_POST_TEXT';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState= {
    posts: [
        {id: 1, post: 'hou are you?', likesCount: 12},
        {id: 2, post: 'nice to me to you!', likesCount: 1},
    ],
    newPostText: "Assalomu-Alaykum",
    profile: null,
    status:""
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
        case SET_USERS_PROFILE:
            return { ...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = () => {return {type: ADD_POST}}
export const updateNewPostTextActionCreator = (text) => {return {type: UPDATE_NEW_TEXT_POST, newText: text}}
export const setUsersProfile = (profile) => ({type:SET_USERS_PROFILE,profile})
export const setStatus = (status) => ({type:SET_STATUS,status})

export const getUserProfile = (userId)=> {return dispatch=>{
    profileAPI.getProfile(userId).then(data => {
        dispatch( setUsersProfile(data))
    })}}

export const getUserStatus = (userId) => {return dispatch => {
    profileAPI.getStatus(userId).then( data => {
        dispatch(setStatus(data))
    })}}

export const updateStatus = (status) => { return dispatch=>{
    profileAPI.updateStatus(status).then(data=>{
        if (data.resultCode===0){
            dispatch(setStatus(status))
        }})}}

export default profileReducer;


