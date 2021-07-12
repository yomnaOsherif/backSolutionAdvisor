import React from "react";
import { useHistory } from "react-router-dom";
import links from "../../App.constant";
// import TextField from "@material-ui/core/TextField";
import { Button } from "react-bootstrap";
// import OutlinedInput from "@material-ui/core/OutlinedInput";
// import InputLabel from "@material-ui/core/InputLabel";
// import InputAdornment from "@material-ui/core/InputAdornment";
// import Visibility from "@material-ui/icons/Visibility";
// import VisibilityOff from "@material-ui/icons/VisibilityOff";
// import FormControl from "@material-ui/core/FormControl";
// import IconButton from "@material-ui/core/IconButton";
import Info from "../../assets/info.png";
import Profile from "../../assets/person.png";
import Star from "../../assets/star.png";
import Upload from "../../assets/upload.png";
import Logout from "../../assets/logout.png";
import tut from "../../assets/tut.png";
// import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import "./header.css";

function HeaderPage() {
const onupdate =() =>{

   history.push(links.UPDATE);
};
  const onLogout = () => {
   localStorage.clear();
   history.push(links.LOGIN);
  };
    const history = useHistory();
    const onAboutUs = () => {
      history.push(links.ABOUTUS);
    };

    const onTutorial = () => {
      history.push(links.TUTORIAL);
    };
    const onSuccessStories = () => {
        history.push(links.SUCCESSSTORIES);
      };
  //   const onRegisterArchitect = () => {
  //     history.push(links.REGISTERARCHITECT);
  //   };
  // const onclickAbout = () => {
  //  window.location.href = 'https://fujairah.ae/en/pages/about.aspx';
  // };

  const architect1 = ()=> {
    return (
      <li className="header-start-listitem">
    <div className="header-icon-container">
      <img
        src={Upload}
        width="40"
        alt="icon"
        style={{
          position: "relative",
          right: "22px",
          bottom: "2px",
          background: "black",
          borderRadius: "25%",
          padding: "6px",
        }}
      />
    </div>
    <div className="header-text-container">
      <div className="header-list-title">
        <p>Upload Documents</p>
      </div>
    </div>
  </li>

    )
  }

  

          const client1 = ()=> {
            return (
          <li className="header-start-listitem" onClick={onTutorial}>
                    <div className="header-icon-container">
                      <img
                        src={tut}
                        width="40"
                        alt="icon"
                        style={{
                          position: "relative",
                          right: "70px",
                          borderRadius: "25%",
                          padding: "2px",
                        }}
                      />
                    </div>
                    <div className="header-text-container">
                      <div className="header-list-title">
                        <p>Tutorial</p>
                      </div>
                    </div>
                  </li>
                   )
                  }

  return (

    <div className="main-sidebar">
      <Button className="wrapperbtn btn-bars" id="menu-toggle">
        <i className="baricn fa fa-bars" /> &nbsp;&nbsp;IBM Solution Advisor
      </Button>
      <div className="list-group-container">
        <ul className="list-group">
          <li className="header-start-listitem" onClick={onupdate}>
            <div className="header-icon-container">
              <img
                src={Profile}
                width="40"
                alt="icon"
                style={{
                  position: "relative",
                  right: "61px",
                  background: "black",
                  borderRadius: "25%",
                  padding: "6px",
                }}
              />
            </div>
            <div className="header-text-container">
              <div className="header-list-title">
                <p>My Profile</p>
              </div>
            </div>
          </li>

          <li className="header-start-listitem" onClick={onAboutUs}>
            <div className="header-icon-container">
              <img
                src={Info}
                width="35"
                alt="icon"
                style={{
                  position: "relative",
                  right: "63px",
                  background: "black",
                  borderRadius: "25%",
                  padding: "6px",
                }}
              />
            </div>
            <div className="header-text-container">
              <div className="header-list-title">
                <p>About Us</p>
              </div>
            </div>
          </li>
          {localStorage.getItem('auth') === "true" ? architect1() : '' }
          <li className="header-start-listitem" onClick={onSuccessStories}>
            <div className="header-icon-container">
              <img
                src={Star}
                width="40"
                alt="icon"
                style={{
                  position: "relative",
                  right: "34px",
                  bottom:"3px",
                  background: "black",
                  borderRadius: "25%",
                  padding: "6px",
                }}
              />
            </div>
            <div className="header-text-container">
              <div className="header-list-title">
                <p>Success Stories</p>
              </div>
            </div>
          </li>
          {localStorage.getItem('auth') === "false" ? client1() : '' }

          <li className="header-start-listitem" onClick={onLogout}>
            <div className="header-icon-container">
              <img
                src={Logout}
                width="40"
                alt="icon"
                style={{
                  position: "relative",
                  right: "65px",
                  background: "black",
                  borderRadius: "25%",
                  padding: "6px",
                }}
              />
            </div>
            <div className="header-text-container">
              <div className="header-list-title">
                <p>Log Out</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );

  
}

export default HeaderPage;
