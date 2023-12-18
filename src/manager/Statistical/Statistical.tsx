import React from 'react';
import './index.css';
import { Button, DatePicker } from 'antd';
import TableStatistical from '../../components/Table/TableStatistical';

const Statistical = () => {
    return (
        <div className='MovieSchedule'>
            <header>Thống kê doanh thu</header>

            <div className='MovieSchedule_option'>
                <div>
                    <div><span>Từ ngày: </span> <DatePicker style={{ width: 250 }} /></div>
                    <div><span>Đến ngày: </span> <DatePicker style={{ width: 250 }} /></div>
                </div>
                <Button type='primary' ghost>Thống kê</Button>
            </div>
            <div className='Statistical_sum'>
                <span>Tổng thu:</span> <span>1000000</span>
            </div>


            <TableStatistical dataSource={[]} />
        </div>
    )
}

export default Statistical