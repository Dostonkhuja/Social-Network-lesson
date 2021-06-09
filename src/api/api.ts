import axios from "axios";
import {UserType} from "../types/types";

export let instance= axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'f146f097-1f6e-4453-911e-f2ac862008f2'
    }
})

export enum ResultCodesEnum {
    Succeess=0,
    Error=1,
}
export enum ResultCodesForCaptchaEnum {
    CaptchaIsRequired=10
}

export type GetItemsType={
    items:Array<UserType>
    totalCount:number
    error:string|null
}

export type APIResponseType<D = {}, RC = ResultCodesEnum> = {
    data: D
    messages: Array<string>
    resultCode: RC
}