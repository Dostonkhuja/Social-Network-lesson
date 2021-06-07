import {usersAPI} from "../api/api";
import {updateObjectArray} from "../utils/object helpers/object-helpers";
import {UserType} from "../types/types";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = "SET_IS_FETCHING"
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING"

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<Number> //Array of users id
}

type InitialStateType = typeof initialState

const usersReducer = (state = initialState, action:any):InitialStateType => {
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

type FollowSuccessType = {
    type:typeof FOLLOW
    userId:number
}
export const followSuccess = (userId:number): FollowSuccessType => {
    return {type: FOLLOW, userId}
}
type UnfollowSuccessType = {
    type:typeof UNFOLLOW
    userId:number
}
export const unfollowSuccess = (userId:number): UnfollowSuccessType => {
    return {type: UNFOLLOW, userId}
}
type SetUsersType = {
    type:typeof SET_USERS
    users: Array<UserType>
}
export const setUsers = (users:Array<UserType>): SetUsersType => {
    return {type: SET_USERS, users}
}
type SetCurrentPageType = {
    type:typeof SET_CURRENT_PAGE
    currentPage:number
}
export const setCurrentPage = (currentPage:number): SetCurrentPageType => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
type SetTotalUsersCountType = {
    type:typeof SET_TOTAL_USERS_COUNT
    totalCountAll:number
}
export const setTotalUsersCount = (totalCount:number): SetTotalUsersCountType => {
    return {type: SET_TOTAL_USERS_COUNT, totalCountAll: totalCount}
}
type SetIsFetchingType = {
    type:typeof SET_IS_FETCHING
    isFetching:boolean
}
export const setIsFetching = (isFetching:boolean): SetIsFetchingType => {
    return {type: SET_IS_FETCHING, isFetching}
}
type ToggleFollowingProgressType = {
    type:typeof TOGGLE_IS_FETCHING
    isFetching:boolean
    userId:number
}
export const toggleFollowingProgress = (isFetching:boolean, userId:number): ToggleFollowingProgressType => {
    return {type: TOGGLE_IS_FETCHING, isFetching, userId}
}

//Thunks
export const requestUsers = (page:number, pageSize:number) => async (dispatch:any) => {
    dispatch(setCurrentPage(page))
    dispatch(setIsFetching(true));
    let response = await usersAPI.getUsers(page, pageSize)
    dispatch(setIsFetching(false))
    dispatch(setUsers(response.items))
    // response.totalCount = 100;     // HOZIRCHA TURIBTI, KEYIN O'CHIRIB TASHLANSIN
    dispatch(setTotalUsersCount(response.totalCount))
}

const followUnfollowFlow = async (dispatch:any, userId:number,apiMethod:any,actionCreator:any) => {
    dispatch(toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);

    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(toggleFollowingProgress(false, userId));
}

export const follow = (userId:number) => async (dispatch:any)  => {
    followUnfollowFlow(dispatch,userId,usersAPI.followPost.bind(userId),followSuccess)
}

export const unfollow = (userId:number) => async (dispatch:any) => {
    followUnfollowFlow(dispatch,userId,usersAPI.unfollowDelete.bind(userId),unfollowSuccess)
}

export default usersReducer;




