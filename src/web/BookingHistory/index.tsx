import React, { useEffect, useState } from 'react';
import './index.css'
import HeaderWeb from '../../components/Header/HeaderWeb';
import Detail from './Detail';
import { historyBooking } from '../../apis/theater';

const BookingHistory = () => {

  const [movies, setMovies] = useState<any>()
  useEffect(() => {
    (async () => {
      const res = await historyBooking()
      if (res?.code === 200) {
        setMovies(res.data)
      } else {
        console.log("looix")
      }
    })()
  }, [])
  return (
    <div>
      <HeaderWeb />
      <div className='BookingHistory'>
        <header>Lịch sử đặt vé</header>
        {
          movies ?
            <div>
              {
                movies.map((movie: any, index: number) => <Detail movie={movie} key={index} />
                )
              }
            </div>
            :
            <div>
              Không có danh sách lịch sử đặt vé
            </div>
        }
      </div>
    </div>
  )
}

export default BookingHistory