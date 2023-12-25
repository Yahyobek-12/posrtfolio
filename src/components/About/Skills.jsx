import './About.css';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { RiReactjsFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaPlusCircle } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoGithub  } from "react-icons/io";
import { SiJquery, SiTailwindcss, SiMui } from "react-icons/si";
import { FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";

const Skills = () => {

  AOS.init();

  return (
    <div className='skills'>
      <h1 className='skills-logo' data-aos="fade-up">my skills</h1>
      <Swiper
        data-aos="fade-down"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className='skills-page'><FaHtml5 className='skills-icon' /><h1>html</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><FaCss3Alt className='skills-icon' /><h1>css</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><FaBootstrap  className='skills-icon' /><h1>bootstrap</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><IoLogoJavascript className='skills-icon' /><h1>javascript</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><SiJquery className='skills-icon' /><h1>jquery</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><RiReactjsFill className='skills-icon' /><h1>react js</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><SiTailwindcss  className='skills-icon' /><h1>tailwind css</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><SiMui  className='skills-icon' /><h1>material ui</h1></SwiperSlide>
        <SwiperSlide className='skills-page'><FaPlusCircle className='skills-icon' /><h1>more</h1></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Skills;
