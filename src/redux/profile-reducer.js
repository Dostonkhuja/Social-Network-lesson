import {profileAPI} from "../api/api";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    posts: [
        {id: 1, post: 'hou are you?', likesCount: 12},
        {id: 2, post: 'nice to me to you!', likesCount: 1},
    ],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {id: 3, post: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {
                ...state, status: action.status
            }
        default:
            return state;
    }
}

export const addPostActionCreator = (newPostText) => {
    return {type: ADD_POST, newPostText}
}
export const setUsersProfile = (profile) => ({type: SET_USERS_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

export const getUserProfile = (userId) =>  async (dispatch) => {
        let response = await profileAPI.getProfile(userId)
        dispatch(setUsersProfile(response))
}
    export const getUserStatus = (userId) => async (dispatch) => {
            let response = await profileAPI.getStatus(userId)
            dispatch(setStatus(response))
        }

        export const updateStatus = (status) => async (dispatch) => {
                let response = await profileAPI.updateStatus(status)
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            }

            export default profileReducer;


