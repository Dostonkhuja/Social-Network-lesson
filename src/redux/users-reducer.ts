import {updateObjectArray} from "../utils/object helpers/object-helpers";
import {UserType} from "../types/types";
import {AppStateType, BaseThunkType, InferActionsTypes} from "./redux-store";
import {Dispatch} from "redux";
import {usersAPI} from "../api/users-api";

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [] as Array<number>, //Array of users id
    filter:{
        term:'',
        friend:null as null | boolean

    }
}



const usersReducer = (state = initialState, action:ActionsTypes):InitialStateType => {
    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state,
                 users: updateObjectArray(state.users,action.userId,"id",{followed: true})
            }
        case 'UNFOLLOW':
            return {
                ...state,
                users:updateObjectArray(state.users,action.userId,"id",{followed: false})
            }
        case 'SET_USERS':
            return {...state, users: action.users}
        case 'SET_CURRENT_PAGE':
            return {...state, currentPage: action.currentPage}
        case 'SET_TOTAL_USERS_COUNT':
            return {...state, totalUsersCount: action.totalCountAll}
        case 'SET_IS_FETCHING':
            return {...state, isFetching: action.isFetching}
        case 'TOGGLE_IS_FETCHING':
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : [...state.followingInProgress.filter(id => id != action.userId)]
            }
        case 'SET_FILTER':
            return {...state, filter:action.payload}
        default:
            return state;
    }
}



export const actions = {
    followSuccess: (userId:number)=> {return {type: 'FOLLOW', userId} as const},
    unfollowSuccess: (userId:number) => {return {type: 'UNFOLLOW', userId} as const},
    setUsers: (users:Array<UserType>) => {return {type: 'SET_USERS', users} as const},
    setCurrentPage: (currentPage:number) => {return {type: 'SET_CURRENT_PAGE', currentPage} as const},
    setFilter: (filter:FilterType) => {return { type: 'SET_FILTER', payload:filter } as const},
    setTotalUsersCount: (totalCount:number) => {return {type: 'SET_TOTAL_USERS_COUNT', totalCountAll: totalCount} as const},
    setIsFetching: (isFetching:boolean) => {return {type: 'SET_IS_FETCHING', isFetching} as const},
    toggleFollowingProgress: (isFetching:boolean, userId:number) => {return {type: 'TOGGLE_IS_FETCHING', isFetching, userId} as const}
}

//Thunks creators

export const requestUsers = (page: number, pageSize: number, filter:FilterType): ThunkType => {
    return async (dispatch, getState) => {
        dispatch(actions.setCurrentPage(page))
        dispatch(actions.setFilter(filter))
        dispatch(actions.setIsFetching(true));
        let response = await usersAPI.getUsers(page, pageSize,filter.term,filter.friend)
        dispatch(actions.setIsFetching(false))
        dispatch(actions.setUsers(response.items))
        // response.totalCount = 100;     // HOZIRCHA TURIBTI, KEYIN O'CHIRIB TASHLANSIN
        dispatch(actions.setTotalUsersCount(response.totalCount))
    }
}
const _followUnfollowFlow = async (dispatch:DispatchType, userId:number,apiMethod:any,actionCreator:(userId:number)=> ActionsTypes ) => {
    dispatch(actions.toggleFollowingProgress(true, userId));
    let response = await apiMethod(userId);
    if (response.resultCode === 0) {
        dispatch(actionCreator(userId));
    }
    dispatch(actions.toggleFollowingProgress(false, userId));
}
export const follow = (userId:number):ThunkType=>
    async (dispatch)  => {
    _followUnfollowFlow(dispatch,userId,usersAPI.followPost.bind(userId),actions.followSuccess)
}
export const unfollow = (userId:number):ThunkType => async (dispatch) => {
    _followUnfollowFlow(dispatch,userId,usersAPI.unfollowDelete.bind(userId),actions.unfollowSuccess)
}

export default usersReducer;

export type InitialStateType = typeof initialState
export type FilterType = typeof initialState.filter
type GetStateType = () => AppStateType
type ActionsTypes = InferActionsTypes<typeof actions>
type DispatchType = Dispatch<ActionsTypes>
type ThunkType = BaseThunkType<ActionsTypes>




