import { Button, DatePicker, Form, Input, InputNumber, Select } from 'antd'

type FieldType = {};

// Email, Họ và tên, Ngày sinh, Địa chỉ, Điện thoại, Tên đăng nhập, Mật Khẩu
const CreateAccount = () => {
  const initialValues = {}

  const onFinish = async (values: FieldType) => { };

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
        label="Email"
        name="name"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Họ và tên"
        name="description"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Ngày sinh"
        name="status"
      >
        <DatePicker
          style={{ width: '100%' }}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Địa chỉ"
        name="category"
      >
        <Input placeholder='' />
      </Form.Item>

      <Form.Item<FieldType>
        label="Điện thoại"
        name="price"
      >
        <InputNumber
          style={{ width: '100%' }}
          min={0}
        />
      </Form.Item>
      <Form.Item<FieldType>
        label="Tên đăng nhập"
        name="max_user"
      >
        <InputNumber
          style={{ width: '100%' }}
          min={1}
          max={4}
        />
      </Form.Item>

      <Form.Item<FieldType>
        label="Mật Khẩu"
        name="hotel_id"

      >
        <InputNumber
          style={{ width: '100%' }}
          disabled={true}
        />
      </Form.Item>


      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
}

export default CreateAccount