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

// cinema-service/api/v1/cinema/by-admin
// truyền lên @RequestParam Integer adminId
export const findCinemaByAdmin = async(
    data: {
        adminId: number
    }
) => {
    return await callApi<any>(`cinema-service/api/v1/cinema/by-admin?adminId=${data.adminId}`, "post")
}

export const getCurrentScheduleInCinema = async(
    data: {
        cinemaId: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/schedule-by-cinema?cinemaId=${data.cinemaId}`, "post")
}