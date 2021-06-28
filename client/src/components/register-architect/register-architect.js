import React from "react";
import { useState} from "react";
import { useHistory } from "react-router-dom";
import links from "../../App.constant";
import TextField from "@material-ui/core/TextField";
import { Button } from "react-bootstrap";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import FormControl from "@material-ui/core/FormControl";
import IconButton from "@material-ui/core/IconButton";
import logo from "../../assets/logo.png";
import lock from "../../assets/lock.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import axios  from 'axios';
import { toast } from "react-toastify";
import "./register-architect.css";
import { environment } from "../../Environments/environment";

export const  RegisterArchitectPage = (props) => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm_password, setConfirm_password] = useState("");


  const register = (e) => {
    e.preventDefault();

    if (password === confirm_password) {
        axios.post(environment.host + '/users/register', {
        name,
        email,
        password,
        confirm_password,
        role: "Architect"
      }, {
        withCredentials: true
      }).then(res => {
        console.log("registered successfully");
        history.push('/login')
        toast.success('User Created Successfully')
      }).catch(err => {
        if (err.message.includes('400')) 
           return toast.error("email already exists!");
        
        return toast.error("try again later")
      });
    } else {
      toast.error("Password Doesn't Match")
    }


  }

  const history = useHistory();
  const onBack = () => {
    history.push(links.LOGIN);
  };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
    showPassword2: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleClickShowPassword2 = () => {
    setValues({ ...values, showPassword2: !values.showPassword2 });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div className="wrapper">
      <div className="row container-row">
        <div className="col-6 left"></div>

        <div className="col-6 right">
          <div className="logo">
            <img src={logo} width="110" alt="Logo" />
          </div>

          <div className="backbtn-container">
            <Button
              className="backbtn"
              type="submit"
              label="register"
              onClick={onBack}
            >
              <ArrowBackIosIcon />
              Back
            </Button>
          </div>
          <form className="register-form">
            <div className="register-main-title">
              <p>Register with IBM Architect Account!</p>
            </div>

            <div className="register-sub-title">
              <p>
                For the purpose of industry regulations, your details are
                required
              </p>
            </div>

            <div className="headlines">
              <p>Enter your Full Name</p>
            </div>
            <TextField
              className="username-field"
              id="Fname"
              label="Full Name*"
              type="text"
              variant="outlined"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <div className="headlines">
              <p>Enter your Email</p>
            </div>
            <TextField
              className="username-field"
              id="email"
              label="Email Address*"
              type="email"
              variant="outlined"
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />
            <div className="headlines">
              <p>Create a Password</p>
            </div>
            <FormControl className="pass-textfield" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password*
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password || password}
                onChange={e => setPassword(e.target.value)}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <div className="headlines">
              <p>Confirm the Password</p>
            </div>
            <FormControl className="pass-textfield" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password*
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword2 ? "text" : "password"}
                value={confirm_password}
                onChange={e => setConfirm_password(e.target.value) && handleChange("password")}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {values.showPassword2 ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>

            <div className="terms">
              <input type="checkbox" className="cBox" />
              <div className="headlines">
                <p>I agree to terms & conditions</p>
              </div>
            </div>

            <div className="btn-container">
              <Button className="btn2" type="submit" label="register" onClick={register}>
                REGISTER ACCOUNT
              </Button>

              <div className="divider">
                <p>----------------- &nbsp; Or &nbsp; -----------------</p>
              </div>

              <Button className="googlebtn" type="submit" label="register">
                <img
                  src={lock}
                  width="26"
                  style={{ float: "left", marginLeft: "30px" }}
                  alt="Logo"
                />
                REGISTER WITH W3ID
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

// export default RegisterArchitectPage;
