import React from "react";
import { useHistory } from "react-router-dom";
import links from "../../App.constant";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { Button } from "react-bootstrap";
import Alien from "../../assets/alien.png";
import AI from "../../assets/AI.png";
import NLP from "../../assets/nlp.png";
import NLU from "../../assets/nlu.png";
import LOGO from "../../assets/logo.png";

import "./landing.css";
function LandingPage() {
    const history = useHistory();
    const onLogin = () => {
      history.push(links.LOGIN);
    };

    return (
        <div className="container-fluid">
            <img className="ibm-logo" src={LOGO} width="110" alt="ibm" />
            <div className="row top-landing-component">
                <div className="offset-1 col-5 leftside">
                    <h1 className="landing-main-title">IBM Solution Advisor</h1>
                    <h2 className="landing-sub-title">Platform for clients and architects to get data-driven insight on which IBM Cloud Pak solutions to use.</h2>
                    <Button className="landing-btn" type="submit" label="Get Started" onClick={onLogin}>
                        <p className="landing-btn-text">Get Started </p>
                    </Button>
                </div>
                <div className="offset-1 col-5 rightside">
                    <div className="ai-pic" >
                        <img src={AI} alt="img" />
                    </div>

                </div>
            </div>



            <div className="row bottom-landing-component">
                <div className="col-4 firstcard"><Card className="landing-card">
                    <CardContent>
                        <img src={Alien} alt="alien" />
                        <div className="card-item-maintxt">Artificial Intelligence</div>
                        <div className="card-item-paragraph">he simulation of human intelligence in machines that are programmed to think like humans and mimic their actions. The term may also be applied to any machine that exhibits traits associated with a human mind such as learning and problem-solving.</div>
                    </CardContent>
                </Card>
                </div>
                <div className="col-4 secondcard">
                    <Card className="landing-card">
                        <CardContent>
                            <img src={NLP} alt="nlp" />
                            <div className="card-item-maintxt">Natural Language Processing</div>
                            <div className="card-item-paragraph">The subfield of linguistics, computer science, and artificial intelligence concerned with the interactions between computers and human language, in particular how to program computers to process and analyze large amounts of natural language data.</div>       </CardContent>

                    </Card></div>
                <div className="col-4 thirdcard"> <Card className="landing-card">
                    <CardContent className="card-item">
                        <img src={NLU} alt="nlu" width="35px" height="29px" />
                        <div className="card-item-maintxt">Natural Language Understanding</div>
                        <div className="card-item-paragraph">The subtopic of natural-language processing in artificial intelligence that deals with machine reading comprehension. Natural-language understanding is considered an AI-hard problem.</div>
                    </CardContent>
                </Card></div>
            </div>





            {/* <div className="col landing-col">
            <Card className="card-item">
          <img src={Alien} alt="alien"/>
          <div className="card-item-maintxt">Artificial Intelligence</div>
          <div className="card-item-paragraph">the quick fox jumps over the lazy dog</div>
          </Card>


            </div>
            <div className="col landing-col">
            <Card className="card-item">
      <img src={NLP} alt="nlp"/>
          <div className="card-item-maintxt">Natural Language Processing</div>
          <div className="card-item-paragraph">the quick fox jumps over the lazy dog</div>
          </Card>
                
</div>
<div className="col landing-col">

<div className="ai-pic">
          <img src={AI} alt="img"/>
      </div> 
      <Card className="card-item">
      <img src={NLU} alt="nlu" width="35px" height="29px"/>
          <div className="card-item-maintxt">Natural Language Understanding</div>
          <div className="card-item-paragraph">the quick fox jumps over the lazy dog</div>
          </Card>

                
</div>*/}
        </div>

    );



}
export default LandingPage;