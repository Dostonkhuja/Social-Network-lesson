import {GetItemsType, instance,APIResponseType} from "./api";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number) {
        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}`)
            .then(res => {return res.data})
    },
    followPost(id: number) {
        return instance.post<APIResponseType>(`follow/${id}`)
            .then(res => {return res.data})
    },
    unfollowDelete(id: number) {
        return instance.delete(`follow/${id}`)
            .then(res => {return res.data})  as Promise<APIResponseType>
    }
}