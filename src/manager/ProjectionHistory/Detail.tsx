import React from 'react';
import { Button, Image } from 'antd';
import { converDate, converTime} from '../../components/FuctionGlobal';

interface IDetail {
    data: any
}

const Detail: React.FC<IDetail> = ({data}) => {

    // if(!data) return <></>

    return (
        <div className='Detail'>
            <div className='left_Detail'>
                <Image
                    width={250}
                    src={""}
                />
                <div>
                    <span>Tên phim: </span>
                    <span>Ngày chiếu: </span>
                    <span>Giờ bắt đầ: </span>
                    <span>Dự kiến kết thúc: </span>
                    <span>Phòng chiếu:</span>
                </div>
            </div>

            <div className='right_Detail'>
                <div>Còn lại: </div>
                <div><Button>Xem vé đã đặt</Button></div>
            </div>
        </div>
    )
}

export default Detail