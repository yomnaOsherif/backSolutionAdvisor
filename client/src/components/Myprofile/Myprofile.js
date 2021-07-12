
import React, { useContext, useEffect } from 'react'
import TextField from "@material-ui/core/TextField";
import { Prompt } from 'react-router';
import "./Myprofile.css";
import axios  from 'axios'; 
import Header from "../header/header";
import { toast } from "react-toastify";

export function MyProfile(props) {
  
  const [response, setresponse] = React.useState({
    
    
    });
    const [values, setValues] = React.useState({
      name : "",
      
      password: "",
      confirm_password:"",
      
      });
      const update = (e) => {
        e.preventDefault();
    
        if (values.password === values.confirm_password) {
          axios.put('http://localhost:5000/api/users/update/'+response._id, {
              
          id: response._id,
          name: values.name,
            password:values.password,
            email:response.email,
            role : response.role,
            confirm_password: values.confirm_password,
            
          }, {
            withCredentials: true
          }).then(res => {
            console.log("updated successfully");
            window.location.reload();
            
            toast.success('updated Successfully')
          }).catch(err => {
            
            
            return toast.error("try again later")
          });
        } else {
          toast.error("Password Doesn't Match")
        }
    
    
      }
    
      const handleChange = (event) => {

        console.log(event.target.name);
        console.log(event.target.value);

        setValues({ ...values, [event.target.name]: event.target.value });
      };

    

     const parseJwt = () => {
      let token = localStorage.getItem("token");
     
      var base64Url = token.split(".")[1];
      var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      var jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function(c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
          );
 
          return JSON.parse(jsonPayload);
        }
      useEffect(()=>{
        let { id } = parseJwt();
          getData(id);
      }, [])
        

       
        const getData = async id => {
            await axios
              .get("http://localhost:5000/api/users/" + id)
              .then(response => {
               setresponse( response.data.data );
               setValues({
                 ...values,
                 name:response.data.data.name
               })
              })
              .catch(error => {
                setresponse({ error_message: error.message });
              });
          };

        
      
    return <div>


<div class="row">
<div class="col-4">
    
<Header/>
</div>
<div class="col-8 align-self-center">
<h1>My Profile</h1>
            <br></br>
            <h5>Welcome, {response.name} </h5>
            <br></br>
<form>
<div class="form-group row">
 
<label for="staticEmail" class="col-sm-2 col-form-label">full name </label>
                <TextField onChange={handleChange}
                className="login-username-field"
                id="fullname"
                
                type="fullname"
                value={values.name}
                variant="outlined"
                name='name'
                />
  </div>
 
  <div class="form-group row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
  <TextField  onChange={handleChange}
                className="login-username-field"
                id="password"
                label="password"
                type="password"
                variant="outlined"
                name='password'
                
                />
   
  </div>
  <div class="form-group row">
  <label for="staticEmail" class="col-sm-2 col-form-label"> confirm password</label>
  <TextField onChange={handleChange}
                className="login-username-field"
                id="confirmpassword"
                label="confirmpassword"
                type="password"
                variant="outlined"
                name='confirm_password'
                />
   
  </div>
  
</form>
<div> 
  <button type="submit" class="btn btn-primary" onClick={update}> Update </button></div>
</div>
</div>

           
</div>      

}
