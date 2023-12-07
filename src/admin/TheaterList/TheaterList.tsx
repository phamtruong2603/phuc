import React, { useEffect } from 'react';
import TableTheaterList from '../../components/Table/TableTheaterList';
import { GetAllCinema } from '../../apis/theater';


const TheaterList = () => {

  // useEffect(() => {
  //   (async() => {
  //     const res = await GetAllCinema()
  //     console.log(res)
  //   })()
  // }, [])
  return (
    <div>
        <TableTheaterList dataSource={[]} />
    </div>
  )
}

export default TheaterList