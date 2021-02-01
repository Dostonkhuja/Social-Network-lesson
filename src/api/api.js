import axios from "axios";

let instance= axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'f146f097-1f6e-4453-911e-f2ac862008f2'
    }
})

export const usersAPI = {
    getUsers(currentPage, pageSize) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response=> {return response.data})
    },
    followPost(id) {
        return instance.post(`follow/${id}`)
            .then(response=>{return response.data})
    },
    unfollowDelete(id) {
        return instance.delete(`follow/${id}`)
            .then(response=>{return response.data})
    }
}

export const authAPI = {
    me() {
        return  instance.get(`auth/me`).then(response=>{return response.data})
    }
}

export const profileAPI = (userId)=> {
    return  instance.get(`profile/${userId}`).then(response=>{return response.data})
}