import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Linkedin from "@iconscout/react-unicons/icons/uil-linkedin";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <span>armylyfbook@gmail.com</span>
        <div className="f-icons">
          <a href="https://instagram.com/arunium_infy?igshid=OGQ5ZDc2ODk2ZA=="> <Insta color="white" size={"3rem"} /></a>
        
          <a href="https://www.linkedin.com/in/arun-kumar-710a71202/"><Linkedin color="white" size={"3rem"} /></a>
         
          <a href="https://github.com/dOping-cOde">  <Gitub color="white" size={"3rem"} /></a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
