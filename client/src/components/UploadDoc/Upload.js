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
  selectedFile:null,
  setSelectedFile:[],
  isSelected: false,
  setIsSelected: false,
  uploadedFileUrl: "",

 };

}

 



onFileChange = event => {
  this.setState({ selectedFile: event.target.files[0] });

}

onFileUpload = (event) => { 
  
  event.preventDefault();
  let formData = new FormData();
  formData.append("myFile", this.state.selectedFile, this.state.selectedFile.name);


  //path: "uploads/1625914875101.pdf"
  fetch(environment.host + '/upload', {method: "POST", body: formData})
  .then(response => response.json())
  .then(data => {
    console.log(data);
    this.setState({ uploadedFileUrl: data.path });
    toast.success('Document Uploaded Successfully')
  });
 }
componentDidMount() {
  console.log(this.state.selectedFile);
  this.fileData();
}

getRecommendation() {
  const recommendationEndpoint  = environment.host + '/recommendation'
  axios.get(recommendationEndpoint, 
    {
      params: {
        url: this.state.uploadedFileUrl
      }
    })
  .then(res => {
    this.setState({ solution: res.data.data.result.results[0].answer });
    //confidence: res.data.data.result.results[0].result_metadata.confidence
  }).catch(err => {
    if (err.message) 
    return toast.error("Query failed to send. Please use a different document.");
  })
}

fileData = () => { 
  if (this.state.selectedFile) { 
      
    return ( 
      <div> 
        <h2>File Details:</h2> 
        <p>File Name: {this.state.selectedFile.name}</p> 
        <p>File Type: {this.state.selectedFile.type}</p> 
        <p> 
          Last Modified:{" "} 
          {this.state.selectedFile.lastModifiedDate.toDateString()} 
        </p> 
      </div> 
    ); 
  } else { 
    return ( 
      <div> 
        <br /> 
        <h4>Choose before Pressing the Upload button</h4> 
      </div> 
    ); 
  } 
}
//File type: {this.state.selectedFile.type} <br></br>
//File Size in bytes: {this.state.selectedFile.size}

  render(){
    return(
    <div className="row">
      <div className="col-4">
        <Header/>
      </div>
      <div className="col-8 align-self-center">
        <div> 
          <input type="file" onChange={this.onFileChange.bind(this)} /> 
          <Button onClick={this.onFileUpload.bind(this)}>Upload File</Button> 
        </div>
          Additional Information <br></br>
          {this.fileData()}
        <div>
          <Button onClick={this.getRecommendation.bind(this)}>Get Recommendation</Button>
        </div>
        <div>Solution Recommended {this.state.solution} <br></br>
          Confidence Score {this.state.confidence}
      </div>
      </div>
    </div>
  )}}
export default Upload;
