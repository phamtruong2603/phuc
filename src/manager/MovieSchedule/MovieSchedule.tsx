import React from 'react';
import "./MovieSchedule.css";
import { Button, Image } from 'antd';

const MovieSchedule = () => {
    return (
        <div className='MovieSchedule'>
            <header>Lịch đang chiếu</header>
            <div className='content-MovieSchedule'>
                <div className='left_content-MovieSchedule'>
                    <Image
                        width={200}
                        src="https://imagev3.vietnamplus.vn/w1000/Uploaded/2023/lepz/2015_02_11/spider.jpg.webp"
                    />
                    <div>
                        <span>Tên phim</span>
                        <span>Ngày chiếu</span>
                        <span>Giờ bắt đầu</span>
                        <span>Dự kiến kết thúc</span>
                        <span>Phòng chiếu</span>
                    </div>
                </div>

                <div className='right_content-MovieSchedule'>
                    <div><Button>Sửa</Button></div>
                    <div><Button>Xóa</Button></div>
                    <div>Còn lại: {`15/20`}</div>
                    <div><Button>Xem vé đã đặt</Button></div>
                </div>
            </div>
        </div>
    )
}

export default MovieSchedule