import React from "react";
import Card from '@material-ui/core/Card';
import { Button } from "react-bootstrap";
import Alien from "../../assets/alien.png";
import AI from "../../assets/AI.png";
import NLP from "../../assets/nlp.png";
import NLU from "../../assets/nlu.png";
import LOGO from "../../assets/logo.png";

import "./landing.css";
function LandingPage() {

    return (
<div>

      <div>
      <div className="landing-logo" >
            <img src={LOGO} width="110" alt="ibm"/>
      </div> 
      <div className="col-md-8 landing-left">
          <div className="landing-main-title">
          IBM Solution Advisor
          </div>
          <div className="landing-sub-title">
          we know how large objects will act but things on a small scale
          </div>
          </div>
          <Button className="landing-btn" type="submit" label="Get Started">
          <p className = "landing-btn-text">Get Started </p>        
             </Button>  
            
          
      </div> 
      <div className="row landing-main">
      <Card className="card-item">
          <img src={Alien} alt="alien"/>
          <div className="card-item-maintxt">Artificial Intelligence</div>
          <div className="card-item-paragraph">the quick fox jumps over the lazy dog</div>
          </Card>
      
      <Card className="card-item">
      <img src={NLP} alt="nlp"/>
          <div className="card-item-maintxt">Natural Language Processing</div>
          <div className="card-item-paragraph">the quick fox jumps over the lazy dog</div>
          </Card>

      <Card className="card-item">
      <img src={NLU} alt="nlu" width="35px" height="29px"/>
          <div className="card-item-maintxt">Natural Language Understanding</div>
          <div className="card-item-paragraph">the quick fox jumps over the lazy dog</div>
          </Card>
      </div>
      <div className="ai-pic">
            <img src={AI} alt="img"/>
      </div> 

      </div>   

    );



}
export default LandingPage;