import './Navbar.css';
import { Link } from 'react-router-dom';
import { GrUserAdmin } from "react-icons/gr";
import { AiTwotoneHome } from "react-icons/ai";
import { FcBusinessContact, FcDiploma1, FcRules } from "react-icons/fc";



const Navbar = () => {

  return (
    <nav>
      <h3 className="logo">yahyobek</h3>
      <ul className='navbar'>
        <Link to='' className='nav-links'>Home</Link>
        <Link to='/my-app/src/components/About/About.jsx' className='nav-links'>about</Link>
        <Link to='' className='nav-links'>projects</Link>
        <Link to='' className='nav-links'>blogs</Link>
        <Link to='' className='nav-links'>admin</Link>
      </ul>

        <ul className="mobile-navbar">
            <div className="flex">
              <Link to=''><AiTwotoneHome className='mobile-icons' /></Link>
              <h6>home</h6>
            </div>
            <div className="flex">
              <Link to='/my-app/src/components/About/About.jsx'><FcBusinessContact className='mobile-icons' /></Link>
              <h6>about</h6>
            </div>
            <div className="flex">
              <Link to=''><FcDiploma1 className='mobile-icons' /></Link>
              <h6>projects</h6>
            </div>
            <div className="flex">
              <Link to=''><FcRules className='mobile-icons' /></Link>
              <h6>blogs</h6>
            </div>
            <div className="flex">
              <Link to=''><GrUserAdmin className='mobile-icons' /></Link>
              <h6>admin</h6>
            </div>
        </ul>

    </nav>
  )
}

export default Navbar
