import './Home.css';
import hi from '../Images/dog-hi.gif';
import { FcDown } from "react-icons/fc";
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { CiCircleRemove } from "react-icons/ci";
import { FaInstagram, FaTelegram, FaGithub, FaFacebookMessenger, FaLinkedinIn, FaTwitter } from "react-icons/fa";

const Home = () => {
  const [self, setSelf] = useState();

  const toggleSelf = () => {
    setSelf(!self)
  }

  return (
    <div className='home'>

      <div className="sticks">
        <div className="stick"></div>
        <div className="stick"></div>
      </div>

      <div className="container">
        <div className="home-txt">
            <img src={hi} alt="hi" className='hi' />
            <h3 className='name'>i'm yahyobek <span>ergashboyev</span></h3>
            <h4 className='ab'>i'm frontend web developer</h4>
            <a href="#self" className='down'><FcDown /></a>
        </div>
      </div>

      <div className="myself" id='self'>
            <div className={self ? "self-txt-active" : "self-txt"}>
                <h1 className='self-logo'>about m<span>e briefly</span></h1>
                <p className='description'>I am fluent in classics like <i>HTML, CSS, Bootstrap, Material ui, Tailwind css Javascript, Jquery, React.</i> </p>
                <p className="description">My field of Interest's are building new  Web Technologies and Products and also in areas related to Deep Learning and Natural Launguage Processing.</p>
                <CiCircleRemove className='remove' onClick={toggleSelf} />
            </div>

            <button className="btn-self" onClick={toggleSelf}>my-self</button>

            <div className="find">
                <Link to='' className='media'><FaInstagram /></Link>
                <Link to='' className='media'><FaTelegram /></Link>
                <Link to='' className='media'><FaGithub /></Link>
                <Link to='' className='media'><FaTwitter  /></Link>
                <Link to='' className='media'><FaLinkedinIn /></Link>
                <Link to='' className='media'><FaFacebookMessenger /></Link>
            </div>

            <footer>&copy; 2023 yahyobek.vercel.app</footer>
      </div>
    </div>
  )
}

export default Home
