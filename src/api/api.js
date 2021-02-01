import axios from "axios";

let instance= axios.create({
    withCredentials:true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY':'e75f4c93-da0c-4918-8f20-5d7dc3c1f1d8'
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

export const authAPI = ()=> {
      return  instance.get(`auth/me`).then(response=>{return response.data})
}

export const profileAPI = (userId)=> {
    return  instance.get(`profile/${userId}`).then(response=>{return response.data})
}