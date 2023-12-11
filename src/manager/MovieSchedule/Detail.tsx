import React from 'react';
import { Button, Image } from 'antd';
import { converDate, converTime} from '../../components/FuctionGlobal';

interface IDetail {
    data: any
}

const Detail: React.FC<IDetail> = ({data}) => {

    console.log(data)

    const urlImg = data.schedule.film.thumnails[0].url

    if(!data) return <></>

    return (
        <div className='Detail'>
            <div className='left_Detail'>
                <Image
                    width={250}
                    src={urlImg}
                />
                <div>
                    <span>Tên phim: {data.schedule.film.name}</span>
                    <span>Ngày chiếu: {converDate(data.schedule.startTime)}</span>
                    <span>Giờ bắt đầ: {converTime(data.schedule.startTime)}</span>
                    <span>Dự kiến kết thúc: {converTime(data.schedule.endTime)}</span>
                    <span>Phòng chiếu:{data.schedule.room.name}</span>
                </div>
            </div>

            <div className='right_Detail'>
                <div><Button>Sửa</Button></div>
                <div><Button>Xóa</Button></div>
                <div>Còn lại: {`${data.availables}/${data.totalSeats}`}</div>
                <div><Button>Xem vé đã đặt</Button></div>
            </div>
        </div>
    )
}

export default Detail