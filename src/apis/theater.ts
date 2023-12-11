import { callApi } from "./callAPI"

export const GetAllCinema = async () => {
    return await callApi<any>("cinema-service/api/v1/cinema", "post")
}

export const createCinema = async (
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
export const findCinemaByAdmin = async (
    data: {
        adminId: number
    }
) => {
    return await callApi<any>(`cinema-service/api/v1/cinema/by-admin?adminId=${data.adminId}`, "post")
}

export const getCurrentScheduleInCinema = async (
    data: {
        cinemaId: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/schedule-by-cinema?cinemaId=${data.cinemaId}`, "post")
}

// schedule-service/api/v1/room/room-in-cinema
export const getRoomInCinema = async (
    data: {
        cinemaId: number
    }
) => {
    return await callApi<any>(`cinema-service/api/v1/room/room-in-cinema?cinemaId=${data.cinemaId}`, "post")
}

// schedule-service/api/v1/schedule/create
export const scheduleCreate = async (
    data: {
        startTime?: string,
        filmId?: number,
        roomId?: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/create`, "post", data)
}

// schedule-service/api/v1/schedule/schedule-history-by-cinema
export const getHistoryScheduleInCinema = async (
    data: {
        cinemaId: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/schedule-history-by-cinema?cinemaId=${data.cinemaId}`, "post")
}

// cinema-service/api/v1/room/create-room
export const createRoom = async (
    data: {
        name?: string
        horizontalSeats?: number
        verticalSeats?: number
        cinemaId?: number
    }
) => {
    return await callApi("cinema-service/api/v1/room/create-room", "post", data)
} 

// cinema-service/api/v1/room/room-in-cinema
export const roomInCinema = async (
    data : {
        cinemaId: number
    }
) => {
    return await callApi<any>(`cinema-service/api/v1/room/room-in-cinema?cinemaId=${data.cinemaId}`, "post")
}