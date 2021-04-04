import React from "react";
import "./aboutus.css";
import Header from "../header/header";
import LOGO from "../../assets/logo.png";
function AboutUsPage() {

    return (
        <div> 
            <Header/>
            <div>
            <div className="logo" >
            <img src={LOGO} width='51px'height= '40px'left='80px' top='38px' alt="ibm"/>
      </div> 
      <div className = 'title'>About Us</div>
      <div className = 'who-are-we'> Who we are? (one paragraph)</div>
      <div className = 'paragraph'>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </div>

            </div>
        </div>
      
    );
}
export default AboutUsPage;
