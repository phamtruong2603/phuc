import React from 'react'
import { Button, Modal, Rate } from 'antd'
import TextArea from 'antd/es/input/TextArea'
interface IModalRating {
    open: boolean,
    setOpen: (open: boolean) => void

}

const ModalRating: React.FC<IModalRating> = ({ open, setOpen }) => {
    console.log(open)
    const handleOk = () => {

    };

    const handleCancel = () => {
        setOpen(false);
    };

    return (
        <Modal
            // width={700}
            style={{}}
            open={open}
            title="Đánh giá phim"
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
                <Button key="back" onClick={handleCancel}>
                    Trở lại
                </Button>,
            ]}
        >
            <div className='movie-quality'>
                <span>Đánh giá chất lượng:</span> 
                <Rate count={10} />
            </div>

            <div>
                Nội dung đánh giá: <TextArea rows={4} />
            </div>
        </Modal>
    )
}

export default ModalRating