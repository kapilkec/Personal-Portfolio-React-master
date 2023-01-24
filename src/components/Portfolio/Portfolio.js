import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import vtradeThumbnail from "../../img/vtradeThumbNail.png";
import kecMedia from "../../img/kecMedia.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="ProjectSlides">
          <span className="projectTitle">Trading Platform</span>
            <img src={vtradeThumbnail}  alt="" />
            
            <div className="ProjectButtons">
            <button className="button s-button">Live Demo</button>
            <button className="button s-button">GitHub</button>
            </div>
           
          </div>         
        </SwiperSlide>
        <SwiperSlide>
        <div className="ProjectSlides">
          <span className="projectTitle"> Social-media Platform</span>
          <img src={kecMedia} alt="" />
          <div className="ProjectButtons">
            <button className="button s-button">Live Demo</button>
            <button className="button s-button">GitHub</button>
            </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
