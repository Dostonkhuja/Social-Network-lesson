import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateStatus} from "../../redux/profile-reducer";
import  {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=this.props.userId
                if (!userId) {
                    this.props.history.push("/login")
                }
        }
        this.props.getUserProfile(userId)
        this.props.getUserStatus(userId)
    }

    render() {
        return (<Profile
            {...this.props}
            profile={this.props.profile}
            status={this.props.status}
            updateStatus={this.props.updateStatus}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        userId:state.auth.userId,
        isAuth:state.auth.isAuth,
        status:state.profilePage.status
    }
}

export default compose(
    connect(mapStateToProps,{getUserProfile,getUserStatus,updateStatus}),
    withRouter
)(ProfileContainer)

