import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';

import './App.css';
import Login from './Pages/Login';
import Nav from './Components/Nav' ;
import Admin from './Pages/Admin' ;
import Protected from './Components/Protected';
import Form from './Pages/Form' ;
import Edit from './Pages/Form' ;

function App() {
  return (
    <>
    <Router>
        <Nav/>
        <Routes>
          <Route path="" element={<Login/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/admin" element={<Protected Component={Admin} />} />
          <Route path="/form" element={<Protected Component={Form} />} />
          <Route path="/edit" element={<Protected Component={Edit} />} />
        </Routes>
    </Router>
    </>
  );
}

export default App;
