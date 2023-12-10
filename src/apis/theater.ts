import { callApi } from "./callAPI"

export const GetAllCinema = async () => {
    return await callApi<any>("cinema-service/api/v1/cinema", "post")
}

export const createCinema = async(
    data: {
        name?: string,
        address?: string
        adminId?: number
    }
) => {
    return await callApi<any>("cinema-service/api/v1/cinema/create-cinema", "post", data)
}
