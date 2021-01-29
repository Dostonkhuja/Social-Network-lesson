import React from 'react'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const SET_IS_FETCHING = "SET_IS_FETCHING"

let initialState = {
    users: [],
    pageSize:10,
    totalUsersCount:0,
    currentPage:1,
    isFetching : false
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u,followed:true}
                    }
                    return u
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u,followed:false}
                    }
                    return u
                })
            }
        case SET_USERS:
            return {...state, users:action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCountAll}
        case SET_IS_FETCHING:
            return {...state, isFetching: action.isFetching}
        default:
            return state;
    }
}

export let follow = (userId) => {return {type: FOLLOW, userId}}
export let unfollow = (userId) => {return {type: UNFOLLOW, userId}}
export let setUsers = (users) => {return {type:SET_USERS, users}}
export let setCurrentPage = (currentPage) => {return {type:SET_CURRENT_PAGE, currentPage}}
export let setTotalUsersCount = (totalCount) => {return {type:SET_TOTAL_USERS_COUNT,totalCountAll: totalCount}}
export let setIsFetching = (isFetching) => { return {type:SET_IS_FETCHING,isFetching}}
export default usersReducer;
