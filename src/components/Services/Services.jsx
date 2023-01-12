import React, { useContext } from "react";
import "./Services.css";
import Card from "../Card/Card";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import { themeContext } from "../../Context";
import { motion } from "framer-motion";
import Resume from './resume.pdf';

const Services = () => {
  // context
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">
      {/* left side */}
      <div className="awesome">
        {/* dark mode */}
        <span style={{ color: darkMode ? "white" : "" }}>My Awesome</span>
        <span>Skills</span>
        <spane>
        Hello there, I'm kapil, I am a Full Stack Web Developer.
          <br />
          An Open Source enthusiast and a Computer Science student from India.
        </spane>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        {/* <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div> */}
      </div>
      {/* right */}
      <div className="cards">
        {/* first card */}
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
        >
           <Card 
            emoji={Humble}
            heading={"Back End development"}
           
              detail={["Node.js (Basics)", "MongoDB (Intermediate)", "FireBaseCloud (InterMediate)"]}
           
            color="rgba(252, 166, 31, 0.45)"
          />
        
        </motion.div>
        {/* second card */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={"Languages known"}
            detail={["C (Basics)","Java (Intermediate)","python (Basics)"]}
          />
        </motion.div>
        {/* 3rd */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
        >
          <div className="FrontEndDevelopment">
           <Card
            emoji={HeartEmoji}
            heading={"Front End development"}
            detail={["HTML (Intermediate)","CSS (Intermediate)","JavaScript (Intermediate)","React.js (Intermediate)","bootStrap (Basics)"]}
          /></div>
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
