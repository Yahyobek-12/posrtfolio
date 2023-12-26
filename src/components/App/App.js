import './App.css';
import Home from '../Home/Home';
import Admin from '../Admin/Admin';
import About from '../About/About';
import Navbar from '../Navbar/Navbar';
import Dashboard from '../../Dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='/my-app/src/components/About/About.jsx' element={<About />} />
        <Route path='/my-app/src/components/Admin/Admin.jsx' element={<Admin />} />
        <Route path='/my-app/src/Dashboard/Dashboard.jsx' element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
