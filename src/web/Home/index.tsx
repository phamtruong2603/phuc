import React, { useContext, useState } from 'react';
import './index.css';
import HeaderWeb from '../../components/Header/HeaderWeb';
import { getMoviesByName } from '../../apis/movie';
import Detail from '../../manager/MovieList/Detail';
import { MessageContextProvider } from '../../contexts/MessageContext';

const Web = () => {

  const mess = useContext(MessageContextProvider)
  const success = mess?.success
  const error = mess?.error

  const [name, setName] = useState<string>()
  const [movies, setMovies] = useState<any>()

  const getMovies = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!name) {
      error("Vui lòng nhập phim muốn tìm kiếm")
      setMovies(null)
    } else {
      const data = {
        name: name
      }
      const res = await getMoviesByName(data)
      if (res?.code === 200) {
        if (res.data.length) {
          setMovies(res.data)
          success("phim đã được tìm thấy")
        }
        else{
          error("Không có phim trong danh sách")
          setMovies(null)
        }
      } else {
        success("Không có phim trong danh sách")
        setMovies(null)
      }
    }
  }
  return (
    <div className='web'>
      <HeaderWeb />
      <div className='Home'>
        <div className='search-home'>
          <form onSubmit={getMovies}>
            <label htmlFor="searchmovies">Phim bộ</label>
            <input
              type="text" id='searchmovies'
              onChange={(e: any) => {
                setName(e.target.value)
                if (!e.target.value) {
                  setMovies(null)
                }
              }}
              placeholder='Tìm kiếm tên phim bạn muốn xem'
            />
            <button type='submit'>Tìm kiếm</button>
          </form>
        </div>

        {
          movies ?
            <>
              {
                movies.map((movie: any, index: number) => {
                  return (
                    <Detail
                      key={index}
                      data={movie}
                    />
                  )
                })
              }
            </>
            :
            <div className='img-home'>
              <iframe
                width="100%" height="100%"
                src="https://www.youtube.com/embed/pFZ3-DlKv0Y?si=tcLhv3JNBjIL0CW-" title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
        }
      </div>
    </div>
  )
}

export default Web