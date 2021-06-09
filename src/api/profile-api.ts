import {PhotosType, ProfileType} from "../types/types";
import {instance, APIResponseType} from "./api";

type SavePhotosResponseDataType = {
    photos:PhotosType
}

export const profileAPI = {
    getProfile(userId: number) {
        return instance.get<ProfileType>(`profile/${userId}`).then(res => {return res.data})
    },
    getStatus(userId: number) {
        return instance.get<string>(`profile/status/${userId}`).then(response => {
            return response.data
        })
    },
    updateStatus(status: string) {
        return instance.put<APIResponseType>(`profile/status`, {status})
    },
    savePhoto(photoFile: any) {
        const formData = new FormData();
        formData.append("image", photoFile);

        return instance.put<APIResponseType<SavePhotosResponseDataType>>(`profile/photo`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    },
    saveProfile(profile: ProfileType) {
        return instance.put<APIResponseType>(`profile`, profile)
    }
}