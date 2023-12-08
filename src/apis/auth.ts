import axios from "axios";
import { User } from "../types/user";
import { callApi } from "./callAPI";

export const register = async (
    data: {
        avatar: string,
        first_name: string,
        last_name: string,
        mobile: string,
        sex: string,
        cmnd: string,
        role: string,
        address: string,
        email: string | undefined,
        password: string |undefined
    }
) => {
    return await callApi<User>('auth/register', 'post', data)
}

export const login = async (
    data: any
) => {
    return await callApi<any>("account-service/api/v1/auth/signin", "post", data, "multipart/form-data")
}

export const loginByToken = async () => {
    const token = localStorage.getItem("token")
    if(token) {
        axios.defaults.headers.common['Auth'] = `${token}`;
        try {
            return await callApi<any>("account-service/api/v1/auth/verify-token", "get")
            
        } catch (error) {
            console.log(error)
        }
    }
    
}

export const getAllUser = async () => {
    return await callApi<User[]>('user/get-all', "get")
}