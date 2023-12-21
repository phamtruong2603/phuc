import { Route, Routes } from 'react-router-dom';
import './App.css';

//import layout
import Admin from './admin';
import Manager from './manager';
import Web from './web';
import DashBoard from './web/DashBoard';
import Showtimes from './web/Showtimes';
import ChooseSeats from './web/ChooseSeats/ChooseSeats';
import Form from './components/FormLogin';
import Register from './components/FormLogin/Register';
import NotFound from './components/NotFound';

//
import { AuthContext } from './contexts/AuthContext';
import MessageContext from './contexts/MessageContext';
import MoviesContext from './contexts/Movies';

import ProtectedMain from './routes/ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <MessageContext>
          <MoviesContext>
            <Routes>
              <Route element={<ProtectedMain />}>
                <Route path="super-admin/*" element={<Admin />} />
                <Route path="admin/*" element={<Manager />} />
                <Route path="/update-information" element={<DashBoard />} />
                <Route path="/not-found" element={<NotFound />} />
              </Route>
              <Route path="/" element={<Web />} />
              <Route path="/showtimes" element={<Showtimes />} />
              <Route path="/showtimes/:id" element={<Showtimes />} />
              <Route path="/showtimes/:id/choose-seats/:scheduleId" element={<ChooseSeats />} />
              {/* choose-seats */}
              <Route path="/login" element={<Form />} />
              <Route path="/register" element={<Register />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </MoviesContext>
        </MessageContext>
      </AuthContext>
    </div>
  );
}

export default App;
