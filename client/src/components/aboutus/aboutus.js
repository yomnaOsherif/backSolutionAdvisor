import React from "react";
import "./aboutus.css";
import Header from "../header/header";
import LOGO from "../../assets/logo.png";
function AboutUsPage() {

    return (
        <div className='row aboutus-container'> 
            <div className= 'col-3 header-part'>
            <Header/>
            </div>
            <div className= 'col-9 content-part'>
            <div className="logo-aboutUs" >
            <img src={LOGO}  width="110px" alt="ibm"/>
      </div> 
      <div className = 'title-aboutUs'>About Us</div>
      <div className = 'explanation'> Who we are? (one paragraph)</div>
      <div className = 'paragraph-aboutUs'>Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah Blah </div>

            </div>
            </div>

    );
}
export default AboutUsPage;