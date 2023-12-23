import './App.css';
import About from '../About/About';
import Home from '../Home/Home';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='../About/About' element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
