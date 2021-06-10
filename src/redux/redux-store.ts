import {Action, applyMiddleware, combineReducers, compose, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import navReducer from "./nav-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import appReducer from "./app-reducer";

let rootReducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    navPage: navReducer,
    usersPage:usersReducer,
    auth:authReducer,
    form: formReducer,
    app:appReducer
});

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));
// //


type RootReducerType = typeof rootReducers
export type AppStateType = ReturnType<RootReducerType>

//type PropertiasType<T> = T extends {[key:string]:infer U} ? U :never
//export type InferActionsTypes<T extends {[key:string]: (...args:any[])=> any}> = ReturnType<PropertiasType<T>>
export type InferActionsTypes<T> = T extends {[key:string]: (...args:any[]) => infer U} ? U : never

export type BaseThunkType<A extends Action = Action,R=Promise<void>> = ThunkAction<R, AppStateType, unknown, A>

let store = createStore(rootReducers,applyMiddleware(thunkMiddleware));

// @ts-ignore
window.store=store;

export default store;