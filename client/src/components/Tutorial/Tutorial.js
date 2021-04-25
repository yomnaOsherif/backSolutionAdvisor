import React from 'react'
import { ReactVideo } from "reactjs-media";
import Header from "../header/header";
import "./Tutorial.css";


function Tutorial() {
 
    window.watsonAssistantChatOptions = {
        integrationID: "04e6735c-841e-43c9-8b7f-df2589f7f867", // The ID of this integration.
        region: "eu-gb", // The region your integration is hosted in.
        serviceInstanceID: "37d1932d-93f5-4415-9028-67cb1def77e9", // The ID of your service instance.
        onLoad: function(instance) { instance.render(); }
      };
    setTimeout(function(){
      const t=document.createElement('script');
      t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
      document.head.appendChild(t);
    });

      return (
          
      <div>
         <div className='row tutorial-container'>
            <div className='col-3 tutorial-container'>
        <Header/>
        </div>
        <div className='col-9 the-rest-tutorial'>
         <div className="title-tutorial"> <h1>Tutorial</h1> </div>
         <div className=" tut-content">
         <h6> Watch this Tutorial to get a full idea of how to use IBM Solution Advisor  </h6>
         <ReactVideo
                src="https://www.example.com/url_to_video.mp4"
                poster="https://www.example.com/poster.png"
                primaryColor="blue"
            />
            

</div>
</div>
</div>
</div>   
    ); 
}
export default Tutorial;