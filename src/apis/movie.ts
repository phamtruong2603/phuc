import { callApi } from "./callAPI"

export const getAllMovies = async() => {
    return await callApi("")
}

// film-service/api/v1/film/create-film
export const createMovies = async(
    data: any
) => {
    return await callApi<any>("film-service/api/v1/film/create-film", "post", data, "multipart/form-data")
}

export const getAllFilms = async() => {
    return await callApi<any>("film-service/api/v1/film", "get")
}