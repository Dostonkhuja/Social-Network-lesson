import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import  {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../HOC/withAuthRedirect";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId){
            userId=this.props.userId
        }
        this.props.getUserProfile(userId)
    }

    render() {
        return (<Profile {...this.props} profile={this.props.profile}/>)
    }
}

let mapStateToProps = (state) => {
    return {
        profile:state.profilePage.profile,
        userId:state.auth.userId,
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);
let WithUrlDataContainerComponent =  withRouter(AuthRedirectComponent);

export default connect(mapStateToProps,{getUserProfile})(WithUrlDataContainerComponent);