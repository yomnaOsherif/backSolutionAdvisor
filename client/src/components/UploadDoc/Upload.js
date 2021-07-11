import React from 'react'
import { Button } from "react-bootstrap";
import Header from "../header/header";
//import Discovery from "../discovery/discovery";
import axios  from 'axios';
import { environment } from "../../Environments/environment";
import { toast } from "react-toastify";
import "./Upload.css";
import LOGO from "../../assets/logo.png";


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
        <br></br>
        <h5>File Details:</h5> 
        <p>File Name: {this.state.selectedFile.name}</p> 
        <p>File Type: {this.state.selectedFile.type}</p> 
        <p> 
          Last Modified:{" "} 
          {this.state.selectedFile.lastModifiedDate.toDateString()} 
        </p> 
      </div> 
    ); 
  } 
}
//File type: {this.state.selectedFile.type} <br></br>
//File Size in bytes: {this.state.selectedFile.size}

  render(){
    return(
      <div className='row success-container'>
            <div className='col-3 header-container'>
        <Header/>
      </div>
      <div className='col-8 the-rest'>
      <div className="logo-aboutUs" >
            <img src={LOGO}  width="110px" alt="ibm"/>
      </div> 
        <div> 
          <div className="title-upload"> Upload Documents</div>
          <br></br>
          <div className="subtitle-upload">Browse  your documents to  give you  recommandations for IBM Solution.
         <br></br>
         Supported file types: PDF 
         <p> For the best performance, limit the number of words in each document. Fewer than 2,000 words  is good, but closer to 1,000 words is better.</p>
         </div >
         <br></br>
         <div className='recommendation-area'>
          < input type="file" onChange={this.onFileChange.bind(this)} /> 
          <Button onClick={this.onFileUpload.bind(this)}>Upload File</Button> 
          {this.fileData()}
          <br></br>
          <br></br>

          <Button onClick={this.getRecommendation.bind(this)}>Get Recommendation</Button>
        <div>Solution Recommended {this.state.solution} <br></br>
          Confidence Score {this.state.confidence}
      </div>
      </div>
      </div>
      </div>
    </div>

  )}}
export default Upload;
