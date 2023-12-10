import { callApi } from "./callAPI"

export const findAllAdminAccount = async () => {
    return await callApi<any>("account-service/api/v1/user/admins", "get")
}

export const findAllCustomersAccount = async () => {
    return await callApi<any>("account-service/api/v1/user/customers", "get")
}

export const createAcount = async (
    data: {
        username: string,
        password: string,
        fullname: string,
        dateOfBirth: string,
        address: string,
        email: string,
        phone: string,
    }
) => {
    return await callApi<any>(`account-service/api/v1/sp-admin/create-admin-account`, "post", data)
}

export const findAllAdminAccountWithoutCinema = async () => {
    return await callApi<any>("account-service/api/v1/user/available-admins", "get")
}