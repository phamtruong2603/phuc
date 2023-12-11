import React, { useContext, useEffect, useState } from 'react';
import "./MovieSchedule.css";
import Detail from './Detail';
import { findCinemaByAdmin } from '../../apis/theater';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { MoviesContextProvider } from '../../contexts/Movies';
import { getCurrentScheduleInCinema } from '../../apis/theater';

const MovieSchedule = () => {

    const auth = useContext(AuthContextProvider);
    const user = auth?.userState.user

    const movieContext = useContext(MoviesContextProvider)
    const movies = movieContext?.movies
    const setMovies = movieContext?.setMovies

    const [schedule, setSchedule] = useState<any>([])

    useEffect(() => {
        if (user && setMovies) {
            (async () => {
                const res = await findCinemaByAdmin({ adminId: user?.id })
                if (res?.code === 200) {
                    setMovies({
                       cinema: {
                        ...res.data,
                       },
                       movies : []
                    })
                } else {
                    console.log(".................")
                }
            })()
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    useEffect(() => {
        
        if(movies?.cinema.id) {
            (async() => {
                const res = await getCurrentScheduleInCinema({cinemaId: movies?.cinema.id})
                if(res?.code === 200) {
                    setSchedule(res.data)
                }
            })()
        }

    }, [movies])

    return (
        <div className='MovieSchedule'>
            <header>Lịch đang chiếu</header>
            {schedule.map((value: any, index: number) => {
                return (
                    <Detail 
                        data={value}
                    />
                )
            })}
        </div>
    )
}

export default MovieSchedule