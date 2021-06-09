import {FormAction, stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {profileAPI} from "../api/profile-api";

let initialState = {
    posts: [
        {id: 1, post: 'hou are you?', likesCount: 12},
        {id: 2, post: 'nice to me to you!', likesCount: 1},
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: '',
    newPostText: ''
}

const profileReducer = (state:InitialStateType = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'SN/PROFILE/ADD_POST':
            let newPost = {id: 3, post: action.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case 'SN/PROFILE/SET_USERS_PROFILE':
            return {...state, profile: action.profile}
        case 'SN/PROFILE/SET_STATUS':
            return {
                ...state, status: action.status
            }
        case 'SN/PROFILE/SAVE_PHOTO_SUCCESS':
            return {...state, profile:{ ...state.profile,photos:action.photos } as ProfileType}
        default:
            return state;
    }
}

export let actions = {
    addPostActionCreator : (newPostText:string) => {return {type:  'SN/PROFILE/ADD_POST', newPostText} as const},
    setUsersProfile : (profile:ProfileType) => ({type: 'SN/PROFILE/SET_USERS_PROFILE', profile}as const),
    setStatus : (status:string) => ({type: 'SN/PROFILE/SET_STATUS', status}as const),
    savePhotoSuccess : (photos:PhotosType) => ({type: 'SN/PROFILE/SAVE_PHOTO_SUCCESS', photos}as const)
}

//Thunk creators
export const getUserProfile = (userId:number):ThunkType => async (dispatch,getState) => {
    let response = await profileAPI.getProfile(userId)
    dispatch(actions.setUsersProfile(response))
}

export const getUserStatus = (userId:number):ThunkType => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(actions.setStatus(response))
}

export const updateStatus = (status:string):ThunkType => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(actions.setStatus(status))
    }
}

export const savePhoto = (file:File):ThunkType => async (dispatch) => {
    let response = await profileAPI.savePhoto(file)
    if (response.data.resultCode === 0) {
        dispatch(actions.savePhotoSuccess(response.data.data.photos))
    }
}

export const saveProfile = (profile:ProfileType):ThunkType => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if (response.data.resultCode === 0) {
        if(userId !== null) {
            dispatch(getUserProfile(userId))
        } else { throw new Error("userId can't be null")}
    } else {
        dispatch(stopSubmit("edit-profile" ,{_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0]);
    }
}

export default profileReducer;

export type InitialStateType = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionsTypes|FormAction>


