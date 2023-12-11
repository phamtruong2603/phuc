import React, { useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import { message, Upload } from 'antd';
import type { UploadFile, UploadProps } from 'antd/es/upload/interface';
interface IUploadImage{
    setFile?: any
}

const UploadImage:React.FC<IUploadImage> = ({setFile}) => {
    const [fileList, setFileList] = useState<UploadFile[]>([])

    console.log(fileList)
    const handleChange: UploadProps['onChange'] = ({ fileList: newFileList }) => {
        const length = newFileList.length

        const isJpgOrPng = newFileList[length - 1].type === 'image/jpeg' || newFileList[length - 1].type === 'image/png';
        if (!isJpgOrPng) {
            message.error('Bạn chỉ có thể tải lên tệp JPG/PNG!');
        } else {
            setFileList(newFileList)
            setFile(newFileList)
        }
    }

    const uploadButton = (
        <div>
            <PlusOutlined />
            <div style={{ marginTop: 8 }}>Upload</div>
        </div>
    );

    return (
        <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            listType="picture-card"
            fileList={fileList}
            // beforeUpload={beforeUpload}
            onChange={handleChange}
        >
            {fileList.length >= 8 ? null : uploadButton}
        </Upload>
    )
}

export default UploadImage