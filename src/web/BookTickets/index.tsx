import React, { useState } from 'react';
import { Col, Row } from 'antd';

interface IBookTickets {
  row: number
  column: number
}

let style: React.CSSProperties = { padding: '8px 0', textAlign: 'center', cursor: "pointer" };
const check = ['1-2', '3-4']

const BookTickets: React.FC<IBookTickets> = ({ row, column }) => {

  const [checkActive, setCheckActive] = useState<string[]>([])
  console.log(checkActive)

  const funcActive = (check: string, background: string) => {
    const removeIndex = checkActive.findIndex((item) => item === check);
    if (removeIndex === -1 && background !== "#8aec8a") {
      setCheckActive([...checkActive, check])
    } else {
      setCheckActive(prevArray => prevArray.filter(item => item !== check));
    }

  }

  let cols = [];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < column; j++) {
      let background = '#0092ff'
      if (check.includes(`${i + 1}-${j + 1}`)) {
        background = '#8aec8a'
      }
      if (checkActive.includes(`${i + 1}-${j + 1}`)) {
        background = 'red'
      }
      cols.push(
        <Col
          key={(`${i + 1}-${j + 1}`).toString()} style={{ width: `${100 / column}%` }}
          onClick={() => funcActive(`${i + 1}-${j + 1}`, background)}
        >
          <div style={{ ...style, background: `${background}` }}>{`${i + 1}-${j + 1}`}</div>
        </Col>,
      );
    }
  }

  return (
    <>
      <Row gutter={[10, 10]}>
        {cols}
      </Row>
    </>
  )
}

export default BookTickets