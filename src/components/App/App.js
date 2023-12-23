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
      </Routes>
    </BrowserRouter>
  )
}

export default App
