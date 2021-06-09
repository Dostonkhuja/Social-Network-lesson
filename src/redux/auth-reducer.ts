import {ResultCodesEnum, ResultCodesForCaptchaEnum} from "../api/api";
import {FormAction, stopSubmit} from "redux-form";
import {securityAPI} from "../api/security-api";
import {authAPI} from "../api/auth-api";
import {BaseThunkType, InferActionsTypes} from "./redux-store";
import {Action} from "redux";

let initialState = {
    userId:null as number | null,
    email:null as string | null,
    login:null as string | null,
    isAuth:false,
    captchaUrl:null as string | null //if null, then captcha is not required
}

const authReducer = (state:InitialStateType=initialState,action:ActionType):InitialStateType => {
    switch (action.type){
        case 'SN/AUTH/GET_CAPTCHA_URL_SUCCESS':
        case 'SN/AUTH/SET_AUTH_USER_DATA':
            return {...state, ...action.payload,}
        default:return state;
    }
}

let actions = {
    setAuthUserData:(userId:number | null,email:string | null,login:string | null,isAuth:boolean)=>(
        {type:'SN/AUTH/SET_AUTH_USER_DATA',payload: {userId,email,login,isAuth}} as const
    ),
    getCaptchaUrlSuccess : (captchaUrl:string) => (
        {type:'SN/AUTH/GET_CAPTCHA_URL_SUCCESS', payload:{captchaUrl}} as const
    )
}

//Thunk creators
export const getAuthUserData = ():ThunkType => async (dispatch) =>{
    let response = await authAPI.me()
        if (response.resultCode === ResultCodesEnum.Succeess){
            let {id,email,login} = response.data;
            dispatch(actions.setAuthUserData(id,email,login,true));
        }
}

export const login = (email:string,password:string,rememberMe:boolean,captcha:string):ThunkType => async (dispatch) =>{
    let response = await authAPI.login(email,password,rememberMe,captcha)
        if (response.resultCode === ResultCodesEnum.Succeess){
          dispatch(getAuthUserData())
        }else {
             if(response.resultCode === ResultCodesForCaptchaEnum.CaptchaIsRequired){
                 dispatch(getCaptchaUrl())
             }
           let message = response.messages.length > 0 ? response.messages[0] : "Some error"
          dispatch(stopSubmit("login" ,{_error:message}))
        }
}

export const getCaptchaUrl = ():ThunkType => async (dispatch) =>{
    let data = await securityAPI.getCaptchaUrl();
    const captchaUrl = data.url;
          dispatch(actions.getCaptchaUrlSuccess(captchaUrl))
}

export const logout = ():ThunkType => async (dispatch) =>{
    let response = await authAPI.logout()
        if (response.resultCode === 0){
            dispatch(actions.setAuthUserData(null,null,null,false));
        }
}

export default authReducer;

type InitialStateType = typeof initialState
type ActionType =InferActionsTypes<typeof actions>
type ThunkType = BaseThunkType<ActionType | FormAction>
