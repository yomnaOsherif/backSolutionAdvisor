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
      <div className = 'explanation'> Who we are?</div>
      <div className = 'paragraph-aboutUs'>A group of 5 Aspiring Architects at IBM who decided to learn more about Watson Assistant,
       Watson Knowledge Studio and SPSS Modeler by implementing a learning project to encompass all three IBM Products.
       We've identified a market gap for both clients and IBM architects and decided to fill it on our own. The gap for clients is that there's no current
       chatbot available to recommend IBM Cloud Pak solutions based on small relevant business problem inputs. There's also a lack in chatbot capabilities 
       concerning asking specific questions related to Watson Services and Cloud Paks. Our Solution Advisor aims to mitigate this issue and solve it.  <br></br><br></br>
       The second market gap is for IT Architects. Through experience, we have realized that architects go through tedious processes to decide on which product to implement.
       Reading incredibly long documents contaning business and functional requirements can cause the architect to skip a part by mistake. The process itself
       also takes a long time to complete. This time could be better allocated elsewhere. Consequently, our solution allows the architect to upload the document and a
       machine learning model in the backend processes it and recommends an appropriate Cloud Pak to suggest to the customer. 
       </div>

            </div>
            </div>

    );
}
export default AboutUsPage;