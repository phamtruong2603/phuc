import React from 'react';
import { Button, Image } from 'antd';


const Detail = () => {
    return (
        <div className='Detail'>
            <div className='left_Detail'>
                <Image
                    width={250}
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

            <div className='right_Detail'>
                <div><Button>Sửa</Button></div>
                <div><Button>Xóa</Button></div>
                <div>Còn lại: {`15/20`}</div>
                <div><Button>Xem vé đã đặt</Button></div>
            </div>
        </div>
    )
}

export default Detail