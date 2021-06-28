
import React from 'react'
import TextField from "@material-ui/core/TextField";
import "./Myprofile.css"; 
import Header from "../header/header";

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

     

<div class="row">
<div class="col-4">
    
<Header/>
</div>
<div class="col-8 align-self-center">
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

}
