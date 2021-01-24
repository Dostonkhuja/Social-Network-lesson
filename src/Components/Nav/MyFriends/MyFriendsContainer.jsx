import MyFriends from "./MyFriends";
import {connect, Provider} from "react-redux";

let mapStateToProps = (state)=> {
    return{
        myFriends:state.navPage.myFriends
    }
};
let mapDispatchToProps = (dispatch)=> {
    return{}
};

export const MyFriendsContainer= connect(mapStateToProps,mapDispatchToProps)(MyFriends);
