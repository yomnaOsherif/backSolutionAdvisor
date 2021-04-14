
import React, { useContext } from 'react'
import TextField from "@material-ui/core/TextField";
import { ProSidebar, Menu, MenuItem, SubMenu,SidebarHeader } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Prompt } from 'react-router';
import "./Myprofile.css"; 


export function MyProfile(props) {

    const [values, setValues] = React.useState({
        firstname : "",
        lastname: "",
        password: "",
      
      });

      const handleChange = (event) => {

        console.log(event.target.name);
        console.log(event.target.value);

        setValues({ ...values, [event.target.name]: event.target.value });
      };

     console.log(values)


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
                    <a href="http://localhost:3000/tuto">About Us</a>
                </li>
               
                <li>
                    <a href="http://localhost:3000/tuto"> Tutorial</a>
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
          <div id="container">
<br></br>
            <h1>My Profile</h1>
            <br></br>
            <h5>Welcome, doha </h5>
            <br></br>
<form>
<div class="form-group row">
 
<label for="staticEmail" class="col-sm-2 col-form-label">full name </label>
                <TextField onChange={handleChange}
                className="login-username-field"
                id="fullname"
                label="fullname"
                type="fullname"
                variant="outlined"
                name='fullname'
                />
  </div>
 
  <div class="form-group row">
  <label for="staticEmail" class="col-sm-2 col-form-label">Password</label>
  <TextField
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
  <TextField
                className="login-username-field"
                id="confirmpassword"
                label="confirmpassword"
                type="password"
                variant="outlined"
                name='confirmpassword'
                />
   
  </div>
  
</form>
<div> 
  <button type="submit" class="btn btn-primary"> Update </button></div>
</div>
            </div>
    </div>
    </div>

}
