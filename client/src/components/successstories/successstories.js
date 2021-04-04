import React from "react";
import Card from '@material-ui/core/Card';
import Bank from "../../assets/bank.png";
import Adnoc from "../../assets/adnoc.png";
import Dewa from "../../assets/dewa.png";
import Emirates from "../../assets/emirates.png";
import Etisalat from "../../assets/etisalat.png";
import HighCollege from "../../assets/high-college.png";

import "./successstories.css";
import Header from "../header/header";

function SuccessStoriesPage() {

    return (
        <div>
        <Header/>
        <div className ="title">Success Stories</div>
        <div className="row">
        <div class="col-lg-4 d-flex align-items-stretch">
                <Card className="card-item">
                    <img src={Bank} alt="bank"/>
                    <div className="card-title">Abu Dhabi Islamic Bank</div>
                    <div className="paragraph">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">
                        <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>
                    </Card>
                <Card className="card-item">
                    <img src={Adnoc} alt="adnoc"/>
                    <div className="card-title">Adnoc</div>
                    <div className="paragraph">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                   
                         <a href="https://www.ibm.com/case-studies/abu-dhabi-national-oil-company-adnoc">Read More...</a></div>
                </Card>
                <Card className="card-item">
                    <img src={Dewa} alt="dewa"/>
                    <div className="card-title">Dewa</div>
                    <div className="paragraph">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                   
                         <a href="https://www.dewa.gov.ae/en/about-us/media-publications/latest-news/2020/11/moro-hub-launches-ibm-power-systems">Read More...</a></div>
                </Card>
                </div>

        </div>
        <div className="row1">
        <div class="col-lg-4 d-flex align-items-stretch">

                <Card className="card-item">
                    <img src={Emirates} alt="emirates"/>
                    <div className="card-title">Emirates</div>
                    <div className="paragraph">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                  
                          <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>


                    </Card>
                <Card className="card-item">
                    <img src={Etisalat} alt="Etisalat"/>
                    <div className="card-title">Etisalat</div>
                    <div className="paragraph">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                
                           <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>


                </Card>
                <Card className="card-item">
                    <img src={HighCollege} alt="HighCollege"/>
                    <div className="card-title">Higher College of Technology</div>
                    <div className="paragraph">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                   
                         <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>


                </Card>

        </div>
        </div>


        </div>
    );
}
export default SuccessStoriesPage;