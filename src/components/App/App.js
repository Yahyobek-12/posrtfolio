import About from '../About/About';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='/my-app/src/components/About/About.jsx' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
