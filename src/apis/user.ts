import { callApi } from "./callAPI"

export const findAllAdminAccount = async() => {
    return await callApi<any>("account-service/api/v1/user/admins", "get")
}