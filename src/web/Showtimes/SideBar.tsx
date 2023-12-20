import React from 'react';

const data = [
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
  'lote a',
]

const SideBar = () => {
  return (
    <div className='SideBar-Showtimes'>
      {data.map((value: any, index: number) => {
        return(
          <div className='name_theater-SideBar'>
            {value}
            <span>{`>`}</span>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar