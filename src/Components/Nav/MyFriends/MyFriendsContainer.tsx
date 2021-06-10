import MyFriends from "./MyFriends";
import {connect, Provider} from "react-redux";
import {AppStateType} from "../../../redux/redux-store";

let mapStateToProps = (state:AppStateType)=> {
    return{
        myFriends:state.navPage.myFriends
    }
};

export const MyFriendsContainer= connect<{},{},{},AppStateType>(mapStateToProps,{})(MyFriends);
