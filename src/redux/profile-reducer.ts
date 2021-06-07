import {profileAPI} from "../api/api";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

const ADD_POST = 'ADD_POST';
const SET_USERS_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';



let initialState = {
    posts: [
        {id: 1, post: 'hou are you?', likesCount: 12},
        {id: 2, post: 'nice to me to you!', likesCount: 1},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

export type InitialStateType = typeof initialState

const profileReducer = (state:InitialStateType = initialState, action:any):InitialStateType => {
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
        case SAVE_PHOTO_SUCCESS:
            return {...state, profile:{ ...state.profile,photos:action.photos } as ProfileType}
        default:
            return state;
    }
}

type AddPostActionCreatorType = {
    type: typeof ADD_POST
    newPostText:string
}
export const addPostActionCreator = (newPostText:string):AddPostActionCreatorType => {return {type: ADD_POST, newPostText}}
type SetUsersProfileActionType = {
    type:typeof SET_USERS_PROFILE
    profile:ProfileType
}
export const setUsersProfile = (profile:ProfileType):SetUsersProfileActionType => ({type: SET_USERS_PROFILE, profile})
type SetStatusActionType = {
    type:typeof SET_STATUS
    status:string
}
export const setStatus = (status:string):SetStatusActionType => ({type: SET_STATUS, status})
type SavePhotoSuccessActionType = {
    type:typeof SAVE_PHOTO_SUCCESS
    photos:PhotosType
}
export const savePhotoSuccess = (photos:PhotosType):SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos})

export const getUserProfile = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(setUsersProfile(response))
}

export const getUserStatus = (userId:number) => async (dispatch:any) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response))
}

export const updateStatus = (status:string) => async (dispatch:any) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

export const savePhoto = (file:any) => async (dispatch:any) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile:ProfileType) => async (dispatch:any, getState:any) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    debugger
    if (response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    } else {
        dispatch(stopSubmit("edit-profile" ,{_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;


