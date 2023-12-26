import './Nav.css'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa"
import { IoIosAnalytics } from "react-icons/io"
import { GoProjectSymlink } from "react-icons/go"
import { TiClipboard } from "react-icons/ti"
import { GiEarthAmerica } from "react-icons/gi"
import { GrChapterAdd } from "react-icons/gr"
import { RiMenuUnfoldLine } from "react-icons/ri";
import { IoPersonCircleOutline } from "react-icons/io5"
import { useState } from 'react'

const Nav = () => {
    const [menu, setMenu] = useState()

  return (
    <>
        <RiMenuUnfoldLine className={menu ? "menu-active" : "menu"} onClick={() => setMenu(!menu)} />
        <div className={menu ? "nav-active" : "nav"}>
        <ul className="nav-navbar">
            <Link to='http://localhost:3000/' className='navbar-links'><FaHome className='icon-nav' /></Link>
            <Link to='' className='navbar-links'><IoIosAnalytics className='icon-nav' /></Link>
            <Link to='' className='navbar-links'><GoProjectSymlink className='icon-nav' /></Link>
            <Link to='' className='navbar-links'><TiClipboard className='icon-nav' /></Link>
            <Link to='' className='navbar-links'><GiEarthAmerica className='icon-nav' /></Link>
            <Link to='' className='navbar-links'><GrChapterAdd className='icon-nav' /></Link>
            <Link to='' className='navbar-links'><IoPersonCircleOutline className='icon-nav' /></Link>
        </ul>
    </div>
    </>
  )
}

export default Nav
