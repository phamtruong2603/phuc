import { Button, Image } from 'antd'
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { converDate, converTime,formatVNDCurrency } from '../../components/FuctionGlobal'
import ModalRating from './ModalRating'

interface IDetail {
    movie: any
}

const Detail:React.FC<IDetail> = ({movie}) => {

    const [openRated, setOpenRated] = useState<boolean>(false)

    // const navigate = useNavigate()

    const urlImg = movie?.film?.thumnails[0]?.url ? movie.film.thumnails[0]?.url : ""

    const type = movie.film.types.map((type: any) => type.name)

    const openModalRating = () => {
        console.log(11111111)
        setOpenRated(true)
    }

    return (
        <div className='Detail'>
            <div className='left_Detail'>
                <Image
                    width={250}
                    src={urlImg}
                />
                <div>
                    <span>Tên phim: {movie.film.name}</span>
                    <span>Thể loại: {type.map((value: any, index: number) => <>{value}{type.length - 1 === index ? "" : ", "}</>)}</span>
                    <span>Rạp chiếu: {movie.cinema.name}</span>
                    <span>Thời gian đặt: {converDate(movie.timeBooking)} {converTime(movie.timeBooking)}</span>
                    <span>Số lượng vé: {movie.tickets.length} vé</span>
                    <span>Thanh toán: {formatVNDCurrency(movie.totalPrice)}</span>
                    {/* <span style={{ alignItems: "center", display: "flex" }}>
                        Đánh giá: {data.score ? data.score : "Chưa có đánh giá"}
                        {
                            data.score && <img
                                style={{ width: "1rem" }}
                                src="https://res.cloudinary.com/dbduzdrla/image/upload/v1702803666/phuc/star_i5npej.png" alt=""
                            />
                        }
                    </span> */}
                </div>
            </div>

            <div className='right_Detail'>
                <Button>Xem chi tiết</Button><br /><br />
                {!movie.rated ? <Button onClick={() => openModalRating()}>Đánh giá ngay</Button>: <>Đã đánh giá</>}
            </div>

            {
                openRated && 
                <ModalRating 
                    open={openRated}
                    setOpen={setOpenRated}
                />
            }
        </div>
    )
}

export default Detail