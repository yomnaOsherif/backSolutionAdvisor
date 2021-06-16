import React, {useState } from 'react'
import { Button } from "react-bootstrap";
import Header from "../header/header";
import Discovery from "../discovery/discovery";

export function Upload() {
    const [selectedFile, setSelectedFile] = useState();
const [ isSelected ,setIsSelected] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
       
		setIsSelected(true);
    }
    const hiddenFileInput = React.useRef(null);
  
    const handleClick = event => {
      hiddenFileInput.current.click();
    };
    const handleSubmission = () => {
		const formData = new FormData();
		formData.append('File', selectedFile);
			
	};
    const handleRecommendation = ()=> {

        
    };
   
    return(
        
        
<div class="row">
<div class="col-4">
    <Discovery/>
<Header/>
</div>
<div class="col-8 align-self-center">
       
        <div id='container'> 
        <h1>Upload Document </h1>
        <p> Browse  your documents to  give you  recommandations for IBM Solution.<br></br>
        Supported file types: CSV, TXT, PDF, DOC, DOCX, HTML, ZIP. <br></br>
        <br></br>
        For the best performance, limit the number of words in each document. Fewer than 2,000 words  is good, but closer to 1,000 words is better.<br></br>
        <br></br>
        </p>
        <div><Button onClick={handleClick}>
        Upload a file
      </Button>
      <br></br>
                 <input type="file" ref={hiddenFileInput} name="file" onChange={changeHandler}  style={{display:'none'}} accept=".CSV, .TXT, .PDF, .DOC, .DOCX, .HTML, .ZIP" />
                 {isSelected ? (
                     <div>
                         <p>Filename: {selectedFile.name}</p>
                         <p>Filetype: {selectedFile.type}</p>
                         <p>Size in bytes: {selectedFile.size}</p>
                        
                     </div>
                 ) : (
                     <p>Select a file to show details</p>
                 )}
                 <div>
                 <Button onClick={handleSubmission}>
      Submit your File
      </Button>
                 </div>
                 <div>
                 <Button onClick={handleRecommendation}>
      Get Recommendation
      </Button>
             </div></div>
             </div>
             </div>
             </div>

         )


   ;}