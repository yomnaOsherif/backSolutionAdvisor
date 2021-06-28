import React from 'react'
import { Button } from "react-bootstrap";
import Header from "../header/header";
//import Discovery from "../discovery/discovery";
import axios from "../../axiosInstance";

class Upload extends React.Component {
  constructor() {
  super();
  //const [selectedFile, setSelectedFile] = this.state();
  //const [ isSelected ,setIsSelected] = this.state(false);
  this.state = {
    Recs: []
   
  };
}

/*selectedFile:[],
setSelectedFile:[],
isSelected:[],
setIsSelected:[]*/
componentDidMount() {
  this.getRecommendation();
 
}

getRecommendation() {
  axios.get("http://192.168.1.102:5000/api/discoveryy").then(res => {
    this.setState({ Recs: res.data.data });
  });
}
refreshAlbums() {
  axios.get("http://localhost:5000/api/discoveryy").then(res => {
    this.setState({ Recs: res.data.data });
  });
}

 

	 /*changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsSelected(true);
    }
     hiddenFileInput = React.useRef(null);
  
     handleClick = event => {
      hiddenFileInput.current.click();
    };
     handleSubmission = () => {
		const formData = new FormData();
		formData.append('File', selectedFile);

			
	};*/
    
   render(){
    return(
        
        
<div className="row">
<div className="col-4">
<Header/>
</div>
<div className="col-8 align-self-center">
       

                 <div>
                 <Button onClick={this.getRecommendation}>
      Get Recommendation
      </Button>
             </div>
             </div>
             </div>


         )

                 }
                }
export default Upload;
