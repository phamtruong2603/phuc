import React, { useContext, useEffect, useState } from 'react';
import "./MovieSchedule.css";
import Detail from './Detail';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { MoviesContextProvider } from '../../contexts/Movies';
import { getCurrentScheduleInCinema } from '../../apis/theater';

const MovieSchedule = () => {

    const auth = useContext(AuthContextProvider);
    const user = auth?.userState.user

    const movieContext = useContext(MoviesContextProvider)
    const movies = movieContext?.movies
    const findCinema = movieContext?.findCinema

    const [schedule, setSchedule] = useState<any>([])

    const getSchedule = async () => {
        const res = await getCurrentScheduleInCinema({ cinemaId: movies?.cinema.id })
        if (res?.code === 200) {
            setSchedule(res.data)
        }
    }

    useEffect(() => {
        if (user) {
            findCinema(user.id)
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user])

    useEffect(() => {
        if (movies?.cinema.id) {
            getSchedule()
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [movies])

    return (
        <div className='MovieSchedule'>
            <header>Lịch đang chiếu</header>
            {schedule.map((value: any, index: number) => {
                return (
                    <Detail
                        data={value}
                        getSchedule={getSchedule}
                    />
                )
            })}
        </div>
    )
}

export default MovieSchedule