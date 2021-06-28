import React from 'react'
import { Button } from "react-bootstrap";
import Header from "../header/header";
//import Discovery from "../discovery/discovery";
import axios  from 'axios';
import { environment } from "../../Environments/environment";
import { toast } from "react-toastify";

class Upload extends React.Component {
  constructor() {
  super();
  //const [selectedFile, setSelectedFile] = this.state();
  //const [ isSelected ,setIsSelected] = this.state(false);

  this.state = {
    solution: "",
    confidence: "",
    selectedFile:[],
  setSelectedFile:[],
  isSelected: false,
  setIsSelected: false
 };

}
onFileChange = event => {
    
  // Update the state
  this.setState({ selectedFile: event.target.files[0] });

};
onFileUpload = () => { 
  // Create an object of formData 
  const formData = new FormData(); 
  // Update the formData object 
  formData.append( 
    "myFile", 
    this.state.selectedFile, 
    this.state.selectedFile.name,
    this.state.selectedFile.type,
    this.state.selectedFile.size
  ); 
  axios.post(environment.host + '/discoveryy/doc', {
    formData
  }).then(res => {
    console.log("uploaded successfully");
    toast.success('Document Uploaded Successfully')
  })
  }
componentDidMount() {
  //this.getRecommendation();
  //this.fileData();
 
}



getRecommendation() {
  axios.get(environment.host + '/discoveryy/rec').then(res => {
    this.setState({ solution: res.data.data.result.results[0].answer, confidence: res.data.data.result.results[0].result_metadata.confidence });

  });
}



   render(){
    return(
        
        
<div className="row">
<div className="col-4">
<Header/>
</div>
<div className="col-8 align-self-center">
       
<div> 
                <input type="file" onChange={this.onFileChange} /> 
                <Button onClick={this.onFileUpload}> 
                  Upload File 
                </Button> 
            </div> 
          Additional Information <br></br>
   File type: {this.state.selectedFile.type} <br></br>
  File Size in bytes: {this.state.selectedFile.size}


                 <div>
                 <Button onClick={this.getRecommendation.bind(this)}>
      Get Recommendation
      </Button>
             </div>
             <div>Solution Recommended {this.state.solution} <br></br>
             Confidence Score {this.state.confidence}
         </div>
             </div>
             </div>
           


         )

                 }
                }
export default Upload;
