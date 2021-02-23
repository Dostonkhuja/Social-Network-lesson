import React from 'react'
import s from './users.module.css'
import {connect} from "react-redux";
import Users from "./Users";
import {follow, requestUsers, toggleFollowingProgress, unfollow } from "../../redux/users-reducer";
import Preloader from "../common/preloader/Preloader";
import {compose} from "redux";
import { getCurrentPage, getFollowingInProgress, getIsFetching,
    getPageSize, getTotalUsersCount, getUsers} from "../../redux/users-selectors";

class UsersСontainer extends React.Component {
    componentDidMount() {
        const {getUsers,currentPage,pageSize} = this.props
        getUsers(currentPage,pageSize)
    }

    onPageChanged = (pageNumber) => {
        const {getUsers,pageSize} = this.props
        getUsers(pageNumber, pageSize)
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
                followingInProgress={this.props.followingInProgress}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

export default compose(
    connect(mapStateToProps, {follow, unfollow, toggleFollowingProgress, getUsers: requestUsers}),
    // withAuthRedirect
)(UsersСontainer)







