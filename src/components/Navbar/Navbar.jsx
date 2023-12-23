import './Navbar.css';
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from "react-icons/ai";
import { FcBusinessContact, FcDiploma1, FcRules, FcGlobe } from "react-icons/fc";



const Navbar = () => {

  return (
    <nav>
      <h3 className="logo">yahyobek</h3>
      <ul className='navbar'>
        <Link to='' className='nav-links'>Home</Link>
        <Link to='../About/About' className='nav-links'>about</Link>
        <Link to='' className='nav-links'>projects</Link>
        <Link to='' className='nav-links'>certificates</Link>
        <Link to='' className='nav-links'>travelling</Link>
      </ul>

        <ul className="mobile-navbar">
            <div className="flex">
              <Link to=''><AiTwotoneHome className='mobile-icons' /></Link>
              <h6>home</h6>
            </div>
            <div className="flex">
              <Link to='../About/About'><FcBusinessContact className='mobile-icons' /></Link>
              <h6>about</h6>
            </div>
            <div className="flex">
              <Link to=''><FcDiploma1 className='mobile-icons' /></Link>
              <h6>projects</h6>
            </div>
            <div className="flex">
              <Link to=''><FcRules className='mobile-icons' /></Link>
              <h6>certificates</h6>
            </div>
            <div className="flex">
              <Link to=''><FcGlobe className='mobile-icons' /></Link>
              <h6>travels</h6>
            </div>
        </ul>

    </nav>
  )
}

export default Navbar
