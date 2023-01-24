import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
 
import Gitub from "@iconscout/react-unicons/icons/uil-github";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
 
import leetcode from "../../img/leetcodeWhite.png";


const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>kapilvirat2030@gmail.com</span>
        <div className="f-icons">
          
          <a href="https://github.com/kapilkec" target={"_blank"}> <Gitub color="white" size={"3rem"} /></a>
          <a href="https://www.linkedin.com/in/kapil-k-34071825b/" target={"_blank"} ><Linkedin color="white" size={"3rem"} /></a>
          <a href="https://leetcode.com/KAPILKEC/" target={"_blank"} > <img src={leetcode} width="50px" alt="" /> </a>

        </div>
      </div>
    </div>
  );
};

export default Footer;
