import React from 'react'
import { ReactVideo } from "reactjs-media";
import Header from "../header/header";
import "./Tutorial.css";


function Tutorial() {
 
    // window.watsonAssistantChatOptions = {
    //     integrationID: "04e6735c-841e-43c9-8b7f-df2589f7f867", // The ID of this integration.
    //     region: "eu-gb", // The region your integration is hosted in.
    //     serviceInstanceID: "37d1932d-93f5-4415-9028-67cb1def77e9", // The ID of your service instance.
    //     onLoad: function(instance) { instance.render(); }
    //   };
    // setTimeout(function(){
    //   const t=document.createElement('script');
    //   t.src="https://web-chat.global.assistant.watson.appdomain.cloud/loadWatsonAssistantChat.js";
    //   document.head.appendChild(t);
    // });

      return (
          
      <div>
         <div className='row tutorial-container'>
            <div className='col-3 tutorial-container'>
        <Header/>
        </div>
        <div className='col-7 the-rest-tutorial'>
         <div className="title-tutorial"> <h1>Tutorial</h1> </div>
         <div className=" tut-content">
         <h6 className="subtitle-tut"> Watch this Tutorial to get a full idea of how to use IBM Solution Advisor  </h6>
         <ReactVideo
                src="https://storage.coverr.co/videos/BALBxhjqfldnwtv00YopEAA014UtVoZo00R?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHBJZCI6Ijg3NjdFMzIzRjlGQzEzN0E4QTAyIiwiaWF0IjoxNjExMjc0NTQwfQ.rVZT49viuSpaSaXUkejPw3N9cvSHbxmSwhrnDUKJCMc"
                 //src="../assets/videoplayback.mp4"
                poster="https://i2.wp.com/hotinformationonline.com/wp-content/uploads/2021/02/IBM-.png?ssl=1"
                primaryColor="red"
            />
            

</div>
</div>
</div>
</div>   
    ); 
}
export default Tutorial;