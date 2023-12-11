import React, { useContext, useEffect, useState } from 'react';
import Detail from './Detail';
import { AuthContextProvider } from '../../contexts/AuthContext';
import { MoviesContextProvider } from '../../contexts/Movies';
import { getHistoryScheduleInCinema } from '../../apis/theater';

const ProjectionHistory = () => {

  const auth = useContext(AuthContextProvider);
  const user = auth?.userState.user

  const movieContext = useContext(MoviesContextProvider)
  const movies = movieContext?.movies
  const findCinema = movieContext?.findCinema

  const [schedule, setSchedule] = useState<any>([])

  useEffect(() => {
    if (user) {
      findCinema(user.id)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user])

  useEffect(() => {

    if (movies?.cinema.id) {
      (async () => {
        const res = await getHistoryScheduleInCinema({ cinemaId: movies?.cinema.id })
        if (res?.code === 200) {
          setSchedule(res.data)
        }
      })()
    }

  }, [movies])

  return (
    <div className='MovieSchedule'>
      <header>Lịch sử chiếu</header>
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

export default ProjectionHistory