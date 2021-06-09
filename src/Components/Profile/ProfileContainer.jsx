import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileType} from "../../types/types";

// type MapStatePropsType = {
//     profile: any
//     userId: number | null
//     isAuth: boolean
//     status: string
// }
//
// type MapDispatchPropsType = {
//     getUserProfile:(userId:number)=> void
//     getUserStatus:(userId:number)=> void
//     updateStatus:()=> void
//     savePhoto:()=> void
//     saveProfile:()=> void
// }
//
// type OwnPropsType = {
//     match:any
//     history:any
// }
//
// type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType


class ProfileContainer extends React.Component {
    refreshProfile() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.userId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps) {
        if (this.props.match.params.userId != prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (<Profile
            {...this.props}
            isOwner={!this.props.match.params.userId}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}
            savePhoto={this.props.savePhoto}
            saveProfile={this.props.saveProfile}
        />)
    }
}

let mapStateToProps = (state)=> {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getUserStatus, updateStatus,savePhoto,saveProfile}),
    withRouter
)(ProfileContainer)

