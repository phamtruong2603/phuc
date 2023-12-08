import React, { useState } from 'react';
import "./MovieSchedule.css";
import Detail from './Detail';

const MovieSchedule = () => {

    const [listMovie, setListMovie] = useState<any[]>([1, 2, 3])

    return (
        <div className='MovieSchedule'>
            <header>Lịch đang chiếu</header>
            {listMovie.map(() => {
                return(
                    <Detail />
                )
            })}
        </div>
    )
}

export default MovieSchedule