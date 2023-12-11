import { callApi } from "./callAPI"

export const getAllMovies = async() => {
    return await callApi("")
}

// film-service/api/v1/film/create-film
export const createMovies = async(
    data: any
) => {
    return await callApi("film-service/api/v1/film/create-film", "post", data, "multipart/form-data")
}