import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Siderbar from "../components/Siderbar/Siderbar";

import MovieSchedule from "./MovieSchedule/MovieSchedule";
import CreateMovie from "./CreateMovie/CreateMovie";

const Manager = () => {
  return (
    <div className="manager">
      <Header /> 
      <div>
        <Siderbar />
        <div className="content">
          <Routes>
            <Route path="/movie-schedule" element={<MovieSchedule />} />
            <Route path="/schedule-movie-showings" element={<></>} />
            <Route path="/projection-history" element={<></>} />
            <Route path="/create-room" element={<></>} />
            <Route path="/room-list" element={<></>} />
            <Route path="/create-movies" element={<CreateMovie />} />
            <Route path="/movie-list" element={<></>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Manager