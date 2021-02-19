import React from 'react'
import {usersAPI} from "../api/api";
import {updateObjectArray} from "../utils/object helpers/object-helpers";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = "SET_IS_FETCHING"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: []
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                 users: updateObjectArray(state.users,action.userId,"id",{followed: true})
            }
        case UNFOLLOW:
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,"id",{followed: false})
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCountAll}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        default:
            return state;
    }
}

export const followSuccess = (userId) => {
    return {type: FOLLOW, userId}
}
export const unfollowSuccess = (userId) => {
    return {type: UNFOLLOW, userId}
}
export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const setTotalUsersCount = (totalCount) => {
    return {type: SET_TOTAL_USERS_COUNT, totalCountAll: totalCount}
}
export const setIsFetching = (isFetching) => {
    return {type: SET_IS_FETCHING, isFetching}
}
export const toggleFollowingProgress = (isFetching, userId) => {
    return {type: TOGGLE_IS_FETCHING, isFetching, userId}
}

//Thunks
export const requestUsers = (page, pageSize) => async dispatch => {
    dispatch(setCurrentPage(page))
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items))
    // response.totalCount = 100;     // HOZIRCHA TURIBTI, KEYIN O'CHIRIB TASHLANSIN
    dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch, userId,apiMethod,actionCreator) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId) => async dispatch => {
    followUnfollowFlow(dispatch,userId,usersAPI.followPost.bind(userId),followSuccess)
}

export const unfollow = (userId) => async dispatch => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollowDelete.bind(userId),unfollowSuccess)
}

export default usersReducer;




