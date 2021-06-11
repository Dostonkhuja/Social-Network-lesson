import React from 'react'
import s from './users.module.css'
import Users from "./Users";
import {FilterType, follow, requestUsers, unfollow} from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers, getUsersFilter
} from "../../redux/users-selectors";
import {UserType} from "../../types/types";
import {AppStateType} from "../../redux/redux-store";
import {connect} from "react-redux";

type MapStatePropsType = {
    currentPage:number
    pageSize:number
    isFetching:boolean
    totalUsersCount:number
    users:Array<UserType>
    followingInProgress:Array<number>
    filter:FilterType
}
type MapDispatchPropsType = {
    getUsers:(currentPage:number,pageSize:number,filter:FilterType)=> void
    unfollow:(userId:number)=>void
    follow:(userId:number)=>void
}
type OwnProps = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnProps

class UsersСontainer extends React.Component<PropsType> {
    componentDidMount() {
        const {getUsers,currentPage,pageSize,filter} = this.props
        getUsers(currentPage,pageSize,filter)
    }

    onPageChanged = (pageNumber:number) => {
        const {getUsers,pageSize,filter} = this.props
        getUsers(pageNumber, pageSize,filter)
    }

    onFilterChagned = (filter:FilterType)=> {
        const {pageSize} = this.props
        this.props.getUsers(1, pageSize,filter)
    }

    render() {
        return <div className={s.userContainer}>
            {this.props.isFetching ?  <div className={s.preLoaderUsers}> <Preloader/> </div> : null}

            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                onPageChanged={this.onPageChanged}
                onFilterChagned={this.onFilterChagned}
                followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        filter:getUsersFilter(state)
    }
}

export default compose(
    connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps, {follow, unfollow, getUsers: requestUsers}),
    // withAuthRedirect
)(UsersСontainer)







