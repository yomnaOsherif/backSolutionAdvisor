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
      <div className="logo" >
            <img src={LOGO} width="110" alt="ibm"/>
      </div> 
      <div className="col-md-8">
          <div className="h1">
          IBM Solution Advisor
          </div>
          <div className="h4">
          we know how large objects will act but things on a small scale
          </div>
          </div>
          <Button className="btn" type="submit" label="Get Started">
          <p className = "btn-text">Get Started </p>        
             </Button>  
            
          
      </div> 
      <div className="row">
      <Card className="card-item">
          <img src={Alien} alt="alien"/>
          <div className="h3">Artificial Intelligence</div>
          <div className="paragraph">the quick fox jumps over the lazy dog</div>
          </Card>
      
      <Card className="card-item">
      <img src={NLP} alt="nlp"/>
          <div className="h3">Natural Language Processing</div>
          <div className="paragraph">the quick fox jumps over the lazy dog</div>
          </Card>

      <Card className="card-item">
      <img src={NLU} alt="nlu" width="35px" height="29px"/>
          <div className="h3">Natural Language Understanding</div>
          <div className="paragraph">the quick fox jumps over the lazy dog</div>
          </Card>
      </div>
      <div className="ai-pic">
            <img src={AI} alt="img"/>
      </div> 

      </div>   

    );



}
export default LandingPage;
