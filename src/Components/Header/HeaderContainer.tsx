import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header, {PropsType,MapDispatchPropsType} from "./Header";
import {AppStateType} from "../../redux/redux-store";

class HeaderContainer extends React.Component<PropsType & MapDispatchPropsType> {
    render() {
        return <Header {...this.props}/>
    }
}

let mapStateToProps = (state:AppStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login,
    }
}

export default connect<PropsType,MapDispatchPropsType,{},AppStateType>(mapStateToProps, {logout})(HeaderContainer)