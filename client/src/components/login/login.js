import React from "react";
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
import "./login.css";

function LoginPage() {
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
              <p>Enter your username and password to log in</p>
            </div>

            <TextField
              className="login-username-field"
              id="username"
              label="Username"
              type="username"
              variant="outlined"
            />

            <FormControl className="login-pass-textfield" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={values.showPassword ? "text" : "password"}
                value={values.password}
                onChange={handleChange("password")}
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
              <Button className="btn" type="submit" label="Login">
                LOGIN
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
