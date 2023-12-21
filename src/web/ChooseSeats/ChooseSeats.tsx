import React, { useEffect, useState } from 'react';
import './index.css';
import BookTickets from './BookTickets'
import HeaderWeb from '../../components/Header/HeaderWeb'
import { Button } from 'antd'
import { useParams } from 'react-router-dom';
import { getSeatsStatus } from '../../apis/theater';
import { converDate, converTime, formatVNDCurrency } from '../../components/FuctionGlobal';

const ChooseSeats = () => {

  const [tickets, setTickets] = useState<any>()

  const [checkActive, setCheckActive] = useState<string[]>([])

  const { scheduleId } = useParams()

  const confirmBook = () => { }

  let sumPrice = 0

  for (const element of checkActive) {
    if (Number(element.split("-")[0]) < 5) {
      sumPrice += 50000
    } else {
      sumPrice += 80000
    }
  }

  useEffect(() => {
    if (scheduleId) {
      (async () => {
        const res = await getSeatsStatus({ scheduleId: Number(scheduleId) })
        if (res?.code === 200) {
          setTickets(res.data)
        }
        else {
          console.log(res)
        }
      })()
    }
  }, [scheduleId])

  return (
    <div className='ChooseSeats'>
      <HeaderWeb />
      <header className='title-ChooseSeats'>Đặt vé xem phim</header>
      {tickets &&
        <div className='content-ChooseSeats'>
          <div className='BookTickets-ChooseSeats'>
            <BookTickets
              row={tickets.row} column={tickets.column}
              bookedSeats={tickets.bookedSeats}
              checkActive={checkActive}
              setCheckActive={setCheckActive}
            />
          </div>
          <div className='infor_BookTickets-ChooseSeats'>
            <div>
              <p>Phim: {tickets.schedule.film.name}</p>
              <p>Phòng chiếu: {tickets.schedule.room.name}</p>
              <p>Thời gian:
                &nbsp;{converTime(tickets.schedule.startTime)}
                &nbsp;{`-`}&nbsp;{converDate(tickets.schedule.startTime)}
              </p>
              <p>Ghế:
                {checkActive.map((value: string, index: number) => <>{`${index !== 0 ? ", " : " "}${value}`}</>)}
              </p>
            </div>
            <div>Tổng tiền: {formatVNDCurrency(sumPrice)}</div>
            <Button type='primary' ghost onClick={confirmBook}>Tiếp tục</Button>
          </div>
        </div>
      }
    </div>
  )
}

export default ChooseSeats