import { Route, Routes } from "react-router-dom";
import Header from "../components/Header/Header";
import Siderbar from "../components/Siderbar/Siderbar";

import MovieSchedule from "./MovieSchedule/MovieSchedule";
import ScheduleMovieShowings from "./ScheduleMovieShowings/ScheduleMovieShowings";
import ProjectionHistory from "./ProjectionHistory/ProjectionHistory";
import CreateRoom from "./CreateRoom/CreateRoom";
import RoomList from "./RoomList/RoomList";
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
            <Route path="/schedule-movie-showings" element={<ScheduleMovieShowings />} />
            <Route path="/projection-history" element={<ProjectionHistory />} />
            <Route path="/create-room" element={<CreateRoom />} />
            <Route path="/room-list" element={<RoomList />} />
            <Route path="/create-movies" element={<CreateMovie />} />
            <Route path="/movie-list" element={<></>} />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default Manager