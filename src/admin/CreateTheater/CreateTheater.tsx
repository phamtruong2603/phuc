import { Button, DatePicker, Form, Input } from 'antd'

type FieldType = {};

// Tên rạp, Địa chỉ, Admin
const CreateTheater = () => {

    const initialValues = {}

    const onFinish = async (values: FieldType) => { };

    return (
        <div>
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
                    name="description"
                >
                    <Input placeholder='' />
                </Form.Item>

                <Form.Item<FieldType>
                    label="Admin"
                    name="status"
                >
                    <DatePicker
                        style={{ width: '100%' }}
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