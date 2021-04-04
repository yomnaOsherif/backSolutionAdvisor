import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import links from "./App.constant";
import LoginPage from "./components/login/login";
import RegisterClientPage from "./components/register-client/register-client";
import RegisterArchitectPage from "./components/register-architect/register-architect";
import HeaderPage from "./components/header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Switch>
            <Route path={links.LOGIN} component={LoginPage} />
            <Route
              exact
              path={links.REGISTERCLIENT}
              component={RegisterClientPage}
            />
            <Route
              exact
              path={links.REGISTERARCHITECT}
              component={RegisterArchitectPage}
            />

            <Route
              exact
              path={links.HEADER}
              component={HeaderPage}
            />
          </Switch>
        </Router>
        <ToastContainer
          containerId="toast-container"
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </header>
    </div>
  );
}

export default App;
