import {instance, APIResponseType, ResultCodesEnum, ResultCodesForCaptchaEnum} from "./api";

type meResponseDataType = {
    id: number
    email: string,
    login: string
}
type LoginResponseDataType = {
   userId: number
}

export const authAPI = {
    me() {
        return instance.get<APIResponseType<meResponseDataType>>(`auth/me`).then(response => {
            return response.data
        })
    },
    login(email: string, password: string, rememberMe: boolean = false, captcha: string | null = null) {
        return instance.post<APIResponseType<LoginResponseDataType, ResultCodesEnum | ResultCodesForCaptchaEnum>>(`auth/login`, {email, password, rememberMe, captcha}).then(response => {
            return response.data
        })
    },
    logout() {
        return instance.delete(`auth/login`).then(response => {
            return response.data
        })
    },
}