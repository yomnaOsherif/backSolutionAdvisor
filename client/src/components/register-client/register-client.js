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
import google from "../../assets/google.png";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./register-client.css";

function RegisterClientPage() {
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
              <p>Register Client Account!</p>
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
              type="name"
              variant="outlined"
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

            <div className="headlines">
              <p>Confirm the Password</p>
            </div>
            <FormControl className="pass-textfield" variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">
                Password*
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

            <div className="terms">
              <input type="checkbox" className="cBox" />
              <div className="headlines">
                <p>I agree to terms & conditions</p>
              </div>
            </div>

            <div className="btn-container">
              <Button className="btn2" type="submit" label="register">
                REGISTER ACCOUNT
              </Button>

              <div className="divider">
                <p>----------------- &nbsp; Or &nbsp; -----------------</p>
              </div>

              <Button className="googlebtn" type="submit" label="register">
                <img
                  src={google}
                  width="26"
                  style={{ float: "left", marginLeft: "30px" }}
                  alt="Logo"
                />
                REGISTER WITH GOOGLE
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterClientPage;
