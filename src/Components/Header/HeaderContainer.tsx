import React from "react";
import {connect} from "react-redux";
import {logout} from "../../redux/auth-reducer";
import Header from "./Header";
import {AppStateType} from "../../redux/redux-store";

type MapStatePropsType= {
    isAuth: boolean
    login:string | null
}
type MapDispatchPropsType= {
    logout:()=> void
}
type OwnProps= {}
type PropsType= MapStatePropsType & MapDispatchPropsType & OwnProps

class HeaderContainer extends React.Component<PropsType> {
    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

let mapStateToProps = (state:AppStateType):MapStatePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login:state.auth.login
    }
}

export default connect<MapStatePropsType,MapDispatchPropsType,OwnProps,AppStateType>(mapStateToProps, {logout})(HeaderContainer)