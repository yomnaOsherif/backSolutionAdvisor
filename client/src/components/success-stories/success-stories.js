import React from "react";
import Card from '@material-ui/core/Card';
import Bank from "../../assets/bank.png";
import Adnoc from "../../assets/adnoc.png";
import Dewa from "../../assets/dewa.png";
import Emirates from "../../assets/emirates.png";
import Etisalat from "../../assets/etisalat.png";
import HighCollege from "../../assets/high-college.png";
import "./success-stories.css";
import Header from "../header/header";

function SuccessStoriesPage() {

    return (
        <div className='row success-container'>
            <div className='col-3 header-container'>
        <Header/>
        </div>
        <div className='col-9 the-rest'>
         <div className="title-success"> Success Stories </div>
        <div className=" d-flex top-content">
                <Card className="card-item-success">
                    <img src={Bank} alt="bank"/>
                    <div className="card-title-success">Abu Dhabi Islamic Bank</div>
                    <div className="paragraph-success">Building a market-leading digital banking channel with tailored omni-channel engagement </div>
                    <div className="read-more">
                        <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>
                    </Card>
                <Card className="card-item-success">
                    <img src={Adnoc} alt="adnoc"/>
                    <div className="card-title-success">Adnoc</div>
                    <div className="paragraph-success">Enhancing accuracy, consistency and speed of rock analysis to support better decisions
  </div>
                    <div className="read-more">                   
                         <a href="https://www.ibm.com/case-studies/abu-dhabi-national-oil-company-adnoc">Read More...</a></div>
                </Card>
                <Card className="card-item-success">
                    <img src={Dewa} alt="dewa"/>
                    <div className="card-title-success">Dewa</div>
                    <div className="paragraph-success">Customers to benefit from improved performance and high data processing through new cloud service

</div>
                    <div className="read-more">                   
                         <a href="https://www.dewa.gov.ae/en/about-us/media-publications/latest-news/2020/11/moro-hub-launches-ibm-power-systems">Read More...</a></div>
                </Card>
        </div>
        <br></br>
        <div className="d-flex bottom-content">
                <Card className="card-item-success">
                    <img src={Emirates} alt="emirates"/>
                    <div className="card-title-success">Emirates</div>
                    <div className="paragraph-success">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                  
                          <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>


                    </Card>
                <Card className="card-item-success">
                    <img src={Etisalat} alt="Etisalat"/>
                    <div className="card-title-success">Etisalat</div>
                    <div className="paragraph-success">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                
                           <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>


                </Card>
                <Card className="card-item-success">
                    <img src={HighCollege} alt="HighCollege"/>
                    <div className="card-title-success">Higher College of Technology</div>
                    <div className="paragraph-success">Blah Blah Blah BlahBlah Blah Blah BlahBlah Blah Blah Blah Blah  </div>
                    <div className="read-more">                   
                         <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">Read More...</a></div>


                </Card>

        </div>
        </div>

        </div>

    );
}
export default SuccessStoriesPage;