import React, { useContext } from 'react'

import { ReactVideo } from "reactjs-media";


export function Tutorial(props) {
    const [values, setValues] = React.useState({
        userid : "",
        
      });

      return <div>


        <div class="wrapper">
        
        <nav id="sidebar">
            <div class="sidebar-header">
            <span class="glyphicon glyphicon-align-justify"></span><p> IBM Solution Advisor </p>
            </div>

            <ul class="list-unstyled components">
               
                <li >
                <a href="http://localhost:3000/my">MyProfile</a>
                    
                </li>
                <li>
                    <a href="#">About Us</a>
                </li>
               
                <li>
                    <a href="#"> Tutorial</a>
                </li>
                <li>
                    <a href="#"> Log out </a>
                </li>
            </ul>

           
        </nav>

     
        <div id="content">
        <nav class="navbar ">
  <a class="topnav-right" href="#">
  
  <div >col-sm-8</div>

  </a>
</nav>
<div >
<div class='container'>  <h1>Tutorial</h1>
<br></br>
            <h6> Watch this Tutorial to get a full idea of how to use IBM Solution Advisor  </h6>
            <br></br>
            </div>
            <div class='container'>
            <ReactVideo
                src="https://www.example.com/url_to_video.mp4"
                poster="https://www.example.com/poster.png"
                primaryColor="blue"
                fluid={false} width={100} height={50}
            />
        </div>
 <div class='container'>
 <br></br>

 <h6>Or take a tour in the solution Advisor </h6>
 <br></br>
            <div>

            <button type="submit" class="btn btn-primary"> Let's Take a tour  </button>
            </div>
 </div>

</div>
            </div>
    </div>
        </div>
    }