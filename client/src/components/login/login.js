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
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import axios  from 'axios';
import { toast } from "react-toastify";
import "./login.css";
import { environment } from "../../Environments/environment";

export const  LoginPage = (props) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [roles] = React.useState({
  //   isArchitect: false,
  //   isClient: false,
  //   type:""
  // });

  const Login = (e) => {
    e.preventDefault();
    axios.post(environment.host + '/users/login', {
      email,
      password,
    }, {
      withCredentials: true
    }).then(res => {
      console.log("successfully Logged In");
      toast.success('successfully Logged In')
      console.log("res.body:", res.data.token);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("auth", res.data.isAuth.toString());
      if(res.data.isAuth) history.push('/success-stories')
      else  history.push('/tutorial')
    }).catch(err => {
      if (err.message) 
         return toast.error("email or password is incorrect, please Try again!");
      
      return toast.error("try again later")
    });
    
  }

// const Type = (e) => { 
//   e.preventDefault();
//   axios.get('http://localhost:5000/api/users/' + email, {
//     withCredentials: true
//   }).then(res => res.json())
//       .then(user =>
//         React.setState(
//           { type: user.data.type },
//           React.setState(
//             { id: user.data.id }
//           )
//         )
//       );
//       console.log(React.state.type);
//       console.log(React.state.id);
//       if (React.state.type === "Architect") {
//         React.setState({ isArchitect: true });
//       } else {
//         React.setState({ isClient: true })
//       }
//       localStorage.setItem("userid", React.state.id);
//     }
  
  // const  isAuthenticated = (e) => {
  //     const token = localStorage.getItem("token");
  //     if (token && token.length > 10) {
  //       return true;
  //     }
  //     return false;
  //   }

  const history = useHistory();
  const onRegisterClient = () => {
    history.push(links.REGISTERCLIENT);
  };
  const onRegisterArchitect = () => {
    history.push(links.REGISTERARCHITECT);
  };
  // const onclickAbout = () => {
  //  window.location.href = 'https://fujairah.ae/en/pages/about.aspx';
  // };

  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
   
    <div className="wrapper">
       {/* {isAlreadyAuthenticated && React.state.isArchitect && !roles.isArchitect ? (
      <Redirect to={{ pathname: "/about-us" }} />
    ) : isAlreadyAuthenticated && React.state.isClient && !roles.isClient ? (
      <Redirect to={{ pathname: "/success-stories" }} />
    ) : ( */}
      <div className="row container-row">
        <div className="col-6 left">
          <div className="main">
            <div className="main-title">
              <p>Create an account Today!</p>
            </div>

            <div className="sub-title2">
              <p>
                To begin this journey, tell us what type of account you'd be
                opening
              </p>
            </div>
            <ul className="fullclick">
              <li
                className="register-start-listitem"
                onClick={onRegisterClient}
              >
                <div className="icon-container">
                  <img src={Icon1} width="60" alt="icon" />
                </div>
                <div className="text-container">
                  <div className="list-main-title">
                    <p>Client</p>
                  </div>

                  <div className="list-sub-title">
                    <p>Personal account to manage all your Activities</p>
                  </div>
                </div>
                <div className="arrow-container">
                  <ArrowForwardIcon />
                </div>
              </li>

              <li
                className="register-start-listitem"
                onClick={onRegisterArchitect}
              >
                <div className="icon-container">
                  <img src={Icon2} width="60" alt="icon" />
                </div>
                <div className="text-container">
                  <div className="list-main-title">
                    <p>IBM</p>
                  </div>

                  <div className="list-sub-title">
                    <p>If you are an IBM employee, then this is for you</p>
                  </div>
                </div>
                <div className="arrow-container">
                  <ArrowForwardIcon />
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="col-6 right">
          <div className="logo">
            <img src={logo} width="110" alt="Logo" />
          </div>
          <form className="login-form">
            <div className="main-title">
              <p>Login</p>
            </div>

            <div className="sub-title">
              <p>Enter your email and password to log in</p>
            </div>

            <TextField
              className="login-username-field"
              id="email"
              label="Email"
              type="email"
              variant="outlined"
              value={email} 
              onChange={e => setEmail(e.target.value)}
            />

            <FormControl className="login-pass-textfield" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password || password}
                onChange={e => setPassword(e.target.value) && handleChange("password")}
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

            <div className="btn-container">
              <Button className="btn" type="submit" label="Login" onClick={Login}>
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
      {/* )} */}
    </div>
     
  );
}

// export default LoginPage;
