import './About.css';
import bg from '../Images/bg.jpg';

const About = () => {

  return (
    <div className='about'>
        <div className="bg">
            <img src={bg} alt="background" />
        </div>

        <div className="about-container">
            <div className="about-txt">
                <h3>About Me</h3>
                <h2>my full name is ergashboyev yahyobek</h2>
                <h1>Hi Everyone, I am Yahyobek ergashboyev from Andijan, Uzbekistan. I am a pupil at
                51-school</h1>
                <a href="#info"><button>more information</button></a>
            </div>
        </div>

        <div className="info" id="info">
            
        </div>
    </div>
  )
}

export default About
