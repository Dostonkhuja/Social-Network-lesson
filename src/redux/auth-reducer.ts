import {authAPI ,securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_AUTH_USER_DATA='SET_AUTH_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = "GET_CAPTCHA_URL_SUCCESS"

// export type InitialStateType = {
//     userId:number | null
//     email:string | null
//     login:string | null
//     isAuth:boolean
//     captchaUrl: string | null
// }

let initialState = {
    userId:null as number | null,
    email:null as string | null,
    login:null as string | null,
    isAuth:false,
    captchaUrl:null as string | null //if null, then captcha is not required
}

type InitialStateType = typeof initialState

const authReducer = (state:InitialStateType=initialState,action:any):InitialStateType => {
    switch (action.type){
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                // userId: 'asdfsdf',
                ...state,
                ...action.payload,
            }

        default:
            return state;
    }
};

type SetAuthUserDataActionPayloadType = {
    userId:number | null
    email:string | null
    login:string | null
    isAuth:boolean | null
}
type SetAuthUserDataType = {
    type:typeof SET_AUTH_USER_DATA,
    payload:SetAuthUserDataActionPayloadType
}

export const setAuthUserData=(userId:number | null,email:string | null,login:string | null,isAuth:boolean):SetAuthUserDataType=>({type:SET_AUTH_USER_DATA,payload: {userId,email,login,isAuth}})

type GetCaptchaUrlSuccessActionType = {
    type:typeof GET_CAPTCHA_URL_SUCCESS
    payload:{captchaUrl :string}
}

export const getCaptchaUrlSuccess = (captchaUrl:string):GetCaptchaUrlSuccessActionType => ({type:GET_CAPTCHA_URL_SUCCESS, payload:{captchaUrl}})

export const getAuthUserData = () => async (dispatch:any) =>{
    let response = await authAPI.me()
        if (response.resultCode === 0){
            let {id,email,login} = response.data;
            dispatch(setAuthUserData(id,email,login,true));
        }
}

export const login = (email:string,password:string,rememberMe:boolean,captcha:string) => async (dispatch:any) =>{
    let response = await authAPI.login(email,password,rememberMe,captcha)
        if (response.resultCode === 0){
          dispatch(getAuthUserData())
        }else {
             if(response.resultCode === 10){
                 dispatch(getCaptchaUrl())
             }
           let message = response.messages.length > 0 ? response.messages[0] : "Some error"
          dispatch(stopSubmit("login" ,{_error:message}))
        }
}

export const getCaptchaUrl = () => async (dispatch:any) =>{
    let response = await securityAPI.getCaptchaUrl();
    const captchaUrl = response.data.url;
          dispatch(getCaptchaUrlSuccess(captchaUrl))
}

export const logout = () => async (dispatch:any) =>{
    let response = await authAPI.logout()
        if (response.resultCode === 0){
            dispatch(setAuthUserData(null,null,null,false));
        }
}

export default authReducer;