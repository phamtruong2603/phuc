import React from 'react';
import { Table } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableRoom {
    dataSource: any
}
const TableStatistical: React.FC<ITableRoom> = ({ dataSource }) => {

    const columns: ColumnsType<any> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: 'key',
            align: 'center',
            className: ''
        },
        {
            title: 'Ngày chiếu',
            dataIndex: 'fullname',
            key: 'fullname',
            align: 'center',
            className: ''
        },
        {
            title: 'Phim chiếu',
            key: 'email',
            dataIndex: 'email',
            align: 'center',
            className: ''
        },
        {
            title: 'Phòng chiếu',
            key: 'username',
            dataIndex: 'username',
            align: 'center',
            className: ''
        },
        {
            title: 'Số vé bán được',
            key: 'username',
            dataIndex: 'username',
            align: 'center',
            className: ''
        },
        {
            title: 'Doanh thu',
            key: 'username',
            dataIndex: 'username',
            align: 'center',
            className: ''
        },
    ];

    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableStatistical