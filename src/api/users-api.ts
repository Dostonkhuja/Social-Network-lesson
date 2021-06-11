import {GetItemsType, instance,APIResponseType} from "./api";

export const usersAPI = {
    getUsers(currentPage: number, pageSize: number ,term:string ,friend: null | boolean = null ) {

        return instance.get<GetItemsType>(`users?page=${currentPage}&count=${pageSize}&term=${term}` + (friend ===null ? '' :+ `&friend=${friend}`))
            .then( res => {
                // console.log(res.data)
                return res.data})
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