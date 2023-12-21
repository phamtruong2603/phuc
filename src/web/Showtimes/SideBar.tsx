import { useNavigate } from "react-router-dom"

interface ISideBar {
  listTheater: any
  setTheater: any
}

const SideBar: React.FC<ISideBar> = ({ listTheater, setTheater }) => {
  const navigate = useNavigate()
  return (
    <div className='SideBar-Showtimes'>
      {listTheater && listTheater.map((value: any, index: number) => {
        return (
          <div className='name_theater-SideBar' key={index}
            onClick={() => {
              setTheater(value)
              navigate(`/showtimes/${value.id}`)
            }}
          >
            {value.name}
            <span>{`>`}</span>
          </div>
        )
      })}
    </div>
  )
}

export default SideBar