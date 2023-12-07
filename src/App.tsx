import { Route, Routes } from 'react-router-dom';
import './App.css';

//import layout
import Admin from './admin';
import Manager from './manager';
import Web from './web';
import Form from './components/FormLogin';
import Register from './components/FormLogin/Register';
import NotFound from './components/NotFound';

//
import { AuthContext } from './contexts/AuthContext';
import MessageContext from './contexts/MessageContext';

function App() {
  return (
    <div className="App">
      <AuthContext>
        <MessageContext>
          <Routes>
            <Route path="super-admin/*" element={<Admin />} />
            <Route path="admin/*" element={<Manager />} />
            <Route path="/login" element={<Form />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<Web />} />
            <Route path="/not-found" element={<NotFound />} />
          </Routes>
        </MessageContext>
      </AuthContext>
    </div>
  );
}

export default App;
