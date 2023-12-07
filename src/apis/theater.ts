import axios from "axios"

export const GetAllCinema = async () => {
    const res = await axios.post('http://localhost:8080/cinema-service/api/v1/cinema')
    return res.data
}
