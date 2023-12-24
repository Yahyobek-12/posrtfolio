import './About.css';
import me from '../Images/me.jpg';
import { Link } from 'react-router-dom';
import background from '../Images/bg.jpg';

const About = () => {
  return (
    <div className='about'>

      <div className="background">
        <img src={background} alt="background" />
      </div>

      <div className="about-container">
        <div className="img-card animate__animated animate__backInDown">
            <img src={me} alt="me" />
        </div>
        <div className="about-txt animate__animated animate__backInUp">
            <h2>about me</h2>
            <h1>my full name is ergashboyev yahyobek</h1>
            <h2 className='school'>I am a pupil at 51 school named After Qo'rg'ontepa.</h2>
            <div className='txt-flex'>
                <h3>age: <span>15</span></h3>
                <h3>job: <span>programmer</span></h3>
                <h3>gender: <span>male</span></h3>
                <h3>number: <span>+998 90 258 53 60</span></h3>
            </div>
            <Link to='' className='pdf'>read more</Link>
        </div>
      </div>
    </div>
  )
}

export default About
