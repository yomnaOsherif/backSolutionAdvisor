import React from "react";
import Card from "@material-ui/core/Card";
import Bank from "../../assets/bank.png";
import Adnoc from "../../assets/adnoc.png";
import Dewa from "../../assets/dewa.png";
import Emirates from "../../assets/emirates.png";
import Etisalat from "../../assets/etisalat.png";
import HighCollege from "../../assets/mayflower.jpg";
import "./success-stories.css";
import Header from "../header/header";

function SuccessStoriesPage() {
  return (
    <div className="row success-container">
      <div className="col-3 header-container">
        <Header />
      </div>
      <div className="col-8 the-rest">
        <div className="title-success"> Success Stories </div>
        <div className=" d-flex top-content">
          <Card className="card-item-success">
            <img src={Bank} alt="bank" />
            <div className="card-title-success">Abu Dhabi Islamic Bank</div>
            <div className="paragraph-success">
              Building a market-leading digital banking channel with tailored
              omni-channel engagement.
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </div>
            <div className="read-more">
              <a href="https://www.ibm.com/case-studies/abu-dhabi-islamic-bank-watson-customer-engagement-digital">
                Read More...
              </a>
            </div>
          </Card>
          <Card className="card-item-success">
            <img src={Adnoc} alt="adnoc" />
            <div className="card-title-success">Adnoc</div>
            <div className="paragraph-success">
              Enhancing accuracy, consistency and speed of rock analysis to
              support better decisions
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </div>
            <div className="read-more">
              <a href="https://www.ibm.com/case-studies/abu-dhabi-national-oil-company-adnoc">
                Read More...
              </a>
            </div>
          </Card>
          <Card className="card-item-success">
            <img src={Dewa} alt="dewa" />
            <div className="card-title-success">Dewa</div>
            <div className="paragraph-success">
              Customers to benefit from improved performance and high data
              processing through new cloud service
            </div>
            <div className="read-more">
              <a href="https://www.dewa.gov.ae/en/about-us/media-publications/latest-news/2020/11/moro-hub-launches-ibm-power-systems">
                Read More...
              </a>
            </div>
          </Card>
        </div>
        <br></br>
        <div className="d-flex bottom-content">
          <Card className="card-item-success">
            <img src={Emirates} alt="emirates" />
            <div className="card-title-success">Emirates</div>
            <div className="paragraph-success">
              implementation of a private cloud & data centre services allowing
              employees remote access to company apps{" "}
            </div>
            <div className="read-more">
              <a href="https://www.arabianbusiness.com/transport/387287-ibm-emirates-sign-deal-for-85m-it-upgrade">
                Read More...
              </a>
            </div>
          </Card>
          <Card className="card-item-success">
            <img src={Etisalat} alt="Etisalat" />
            <div className="card-title-success">Etisalat</div>
            <div className="paragraph-success">
              Etisalat Misr, introduces its first AI virtual assistant to
              transform its customers’ experience.
            </div>
            <div className="read-more">
              <a href="https://mea.newsroom.ibm.com/2020-06-16-Etisalat-Misr-Transforms-Customer-Experience-with-IBM-Watson-Assistant">
                Read More...
              </a>
            </div>
          </Card>
          <Card className="card-item-success">
            <img
              src={HighCollege}
              alt="HighCollege"
              style={{
                width: "52px",
                height: "44px",
              }}
            />
            <div className="card-title-success">Mayflower</div>
            <div className="paragraph-success">
              By leveraging AI, MAS will start a new era of marine exploration
              just when we need it the most.
            </div>
            <div className="read-more">
              <a href="https://www.ibm.com/case-studies/mayflower/">
                Read More...
              </a>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default SuccessStoriesPage;
