import React, { useContext, useEffect, useState } from 'react';
import "./index.css";
import Detail from './Detail';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { MoviesContextProvider } from '../../contexts/Movies';
import { getAllFilms } from '../../apis/movie';

const MovieList = () => {

    const auth = useContext(AuthContextProvider);
    const user = auth?.userState.user

    const movieContext = useContext(MoviesContextProvider)
    const findCinema = movieContext?.findCinema

    const [optionsMovies, setOptionsMovies] = useState<any[]>()

    const getFilms = async () => {
        const res = await getAllFilms()
        if (res?.code === 200) {
            setOptionsMovies(res.data)
        }
    }

    useEffect(() => {
        if (user) {
            findCinema(user.id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    useEffect(() => {
        getFilms()
    }, [])

    console.log(optionsMovies)

    return (
        <div className='MovieList MovieSchedule'>
            <header>Danh sách phim</header>

            {
                optionsMovies ? optionsMovies.map((value: any, index: number) => {
                    return (
                        <Detail
                            data={value}
                            getFilms={getFilms}
                        />
                    )
                })
                    :
                    <div className='not-data'>
                        {/* <img src="https://res.cloudinary.com/dbduzdrla/image/upload/v1703320851/phuc/file-and-folder_vbd8uh.png" alt="" /> */}
                        <img src="https://res.cloudinary.com/dbduzdrla/image/upload/v1703320851/phuc/empty-box_n5egmb.png" alt="" />
                        Hiện đang không có phim
                    </div>
            }
        </div>
    )
}

export default MovieList