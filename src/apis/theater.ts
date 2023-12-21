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

// schedule-service/api/v1/schedule/delete
// gửi lên scheduleId
// postmapping

export const deleteSchedule = async(
    data: {
        scheduleId: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/delete?scheduleId=${data.scheduleId}`, "post")
}

// schedule-service/api/v1/schedule/get-by-id
// truyền lên scheduleId
export const getScheduleById = async(
    data: {
        scheduleId: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/get-by-id`, "get", data)
}

// schedule-service/api/v1/schedule/edit
// private String startTime;
//     private Integer filmId;
//     private Integer roomId;
// postmapping
export const scheduleEdit = async (
    data: {
        id: number
        startTime?: string,
        filmId?: number,
        roomId?: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/edit`, "post", data)
}

// schedule-service/api/v1/schedule/view-all-orders
// gửi lên scheduleId
// getmapping
export const getAllOrders = async (
    data: {
        scheduleId: number
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/view-all-orders`, "get", data)
}

// schedule-service/api/v1/schedule/cinema-by-day
// truyền lên: Integer cinemaId, String date
// postMapping
export const cinemaByDay = async (
    data: {
        cinemaId: number,
        date: string
    }
) => {
    return await callApi<any>(`schedule-service/api/v1/schedule/cinema-by-day?cinemaId=${data.cinemaId}&date=${data.date}`, "post")
}

// schedule-service//api/v1/schedule/get-seats-status
// gửi lên scheduleId
// getmapping
export const getSeatsStatus = async (
    data: {
        scheduleId: number
    }
) => {
    return await callApi<any>(`schedule-service//api/v1/schedule/get-seats-status`, "get", data)
}