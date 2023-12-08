import React from 'react';
import { Button, Space, Table, Tag } from "antd";
import type { ColumnsType } from 'antd/es/table';

interface ITableRoom {
    dataSource: any
}

// STT, Họ Tên, Username, Email, Địa Chỉ, Trạng Thái, Rạp Quản Lý
const columns: ColumnsType<any> = [
    {
        title: 'STT',
        dataIndex: 'key',
        key: 'key',
        align: 'center',
        className: ''
    },
    {
        title: 'Họ Tên',
        dataIndex: 'name',
        key: 'name',
        align: 'center',
        className: ''
    },
    {
        title: 'Username',
        key: 'username',
        dataIndex: 'username',
        align: 'center',
        className: ''
    },
    {
        title: 'Email',
        key: 'email',
        dataIndex: 'email',
        align: 'center',
        className: ''
    },
    {
        title: 'Địa Chỉ',
        key: 'address',
        dataIndex: 'address',
        align: 'center',
        className: ''
    },
    {
        title: 'Rạp Quản Lý',
        key: 'nameCinema',
        dataIndex: 'nameCinema',
        align: 'center',
        className: ''
    },
    {
        title: 'Trạng Thái',
        key: 'blocked',
        dataIndex: 'blocked',
        align: 'center',
        className: ''
    },
];

const TableAdminAccounts:React.FC<ITableRoom> = ({ dataSource }) => {
    console.log(dataSource)
    return (
        <Table
            bordered={true}
            columns={columns} dataSource={dataSource}
            pagination={false}
        />
    )
}

export default TableAdminAccounts