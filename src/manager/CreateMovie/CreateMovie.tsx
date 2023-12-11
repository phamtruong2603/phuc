import React, { useState } from 'react';
import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd';
import type { DatePickerProps } from 'antd';
import type { SelectProps } from 'antd';
import UploadImage from '../../components/UploadImage/UploadImage';
import { createMovies } from '../../apis/movie';
import { converThumnails } from '../../components/FuctionGlobal';

type FieldType = {};

// Tên phim, Thể loại, Mô tả, Ngày phát hành, Thời lượng(phút), Ảnh thumbnails
const CreateMovie = () => {
    const initialValues = {}

    const [file, setFile] = useState<any>()

    const [data, setData] = useState<any>()

    const options: SelectProps['options'] = [
        {
            label: "Hài",
            value: 1
        },
        {
            label: "Hành động",
            value: 2
        },
        {
            label: "Kinh dị",
            value: 3
        },
        {
            label: "Gia đình",
            value: 4
        },
        {
            label: "Lãng mạn",
            value: 5
        },
        {
            label: "Khoa học - Viễn tưởng",
            value: 6
        },
        {
            label: "Hoạt hình",
            value: 7
        },
        {
            label: "Tài liệu",
            value: 8
        }
    ];


    const handleChange = (value: string[]) => {
        setData({
            ...data,
            typeIds: value
        })
    };
    const onChange: DatePickerProps['onChange'] = (date, dateString) => {
        setData({
            ...data,
            releaseDate: dateString
        })
    };
    const onFinish = async (values: FieldType) => {
        // const newFile = file.map((value: any) => value.originFileObj)
        const newFile = converThumnails(file)
        console.log(newFile)
        console.log(data)
        const req = {
            ...values,
            ...data,
            ...newFile
        }
        const res = await createMovies(req)
        console.log(res)
    };

    return (
        <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            onFinish={onFinish}
            autoComplete="off"
            initialValues={initialValues}
        >
            <Form.Item<FieldType>
                label="Tên phim"
                name="name"
            >
                <Input placeholder='' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Thể loại"
            >
                <Select
                    mode="multiple"
                    allowClear
                    style={{ width: '100%' }}
                    placeholder="Lựa chọn thể loại phim..."
                    onChange={handleChange}
                    options={options}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Mô tả"
                name="description"
            >
                <Input placeholder='' />
            </Form.Item>

            <Form.Item<FieldType>
                label="Ngày phát hành"
            >
                <DatePicker
                    style={{ width: '100%' }}
                    onChange={onChange}
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Thời lượng(phút)"
                name="duration"
            >
                <InputNumber
                    style={{ width: '100%' }}
                    placeholder=''
                />
            </Form.Item>

            <Form.Item<FieldType>
                label="Ảnh thumbnails"
            >
                <UploadImage setFile={setFile}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default CreateMovie