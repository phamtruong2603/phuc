import { Button, Form, Input, Select } from 'antd'
import { useEffect, useState } from 'react';
import { findAllAdminAccountWithoutCinema } from '../../apis/user';
import { createCinema } from '../../apis/theater';

type FieldType = {};

// Tên rạp, Địa chỉ, Admin
const CreateTheater = () => {

    const initialValues = {}
    const [options, setOptions] = useState<any>([])
    const [id, setId] = useState<number>()

    useEffect(() => {
        (async() => {
            const res = await findAllAdminAccountWithoutCinema()
            console.log(res)
            if(res?.code === 200) {
                const newData = res.data.map((value: any) => {
                    return({
                        ...value,
                        value: value.id,
                        label: value.fullname
                    })
                })
                setOptions(newData)
            }
        })()
    }, [])

    const handleChange = (value: string) => {
        setId(Number(value))
    };

    const onFinish = async (values: FieldType) => {
        console.log(options)
        const req = {
            adminId: id,
            ...values
        }
        console.log(req)
        const res = await createCinema(req)
        console.log(res)
     };

    return (
        <div className='MovieSchedule'>
            <header>Tạo mới rạp</header>
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
                    label="Tên rạp"
                    name="name"
                >
                    <Input placeholder='' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Địa chỉ"
                    name="address"
                >
                    <Input placeholder='' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Admin"
                >
                    <Select
                        placeholder="Lựa chọn admin"
                        style={{ width: "100%" }}
                        onChange={handleChange}
                        options={options}
                    />
                </Form.Item>

                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default CreateTheater