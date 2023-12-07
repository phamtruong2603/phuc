import React from 'react';
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableRoom {
    dataSource: any
}

// STT, Tên Rạp,  Địa Chỉ, Admin
const columns: ColumnsType<any> = [
    {
        title: 'STT',
        dataIndex: 'id',
        key: 'id',
        align: 'center',
        className: ''
    },
    {
        title: 'Tên Rạp',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        className: ''
    },
    {
        title: 'Địa Chỉ',
        key: 'price',
        dataIndex: 'price',
        align: 'center',
        className: ''
    },
    {
        title: 'Admin',
        key: 'max_user',
        dataIndex: 'max_user',
        align: 'center',
        className: ''
    },
];

const TableTheaterList:React.FC<ITableRoom> = ({ dataSource }) => {
    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableTheaterList