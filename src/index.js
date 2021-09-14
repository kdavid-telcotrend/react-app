import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "assets/styles/tailwind.css";

// layouts

import Admin from "layouts/Admin.js";
import Auth from "layouts/Auth.js";

// views without layouts

import App from "./App.js";
import API_Call from "views/API_Call.js";
import Landing from "views/Landing.js";
import Profile from "views/Profile.js";
import Index from "views/Index.js";
import LoginButton from "components/Login/LoginButton.js";
import LogoutButton from "components/Login/LogoutButton.js";
import AuthContext from "views/auth/AuthContext.js";

import LoginTry from "./components/login.component";
import Register from "./components/register.component";
import Home from "./components/home.component";
import ProfileTry from "./components/profile.component";
import MasterForm from "./models/MasterForm.js";
import MultiStepProgressBar from "./models/MultiStepProgressBar.js";
import Step1 from "./models/Step1.js";
import Step2 from "./models/Step2.js";
import Step3 from "./models/Step3.js";

import { Auth0Provider } from '@auth0/auth0-react';

const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;

ReactDOM.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri = {window.location.origin} >
    <BrowserRouter>
      <Switch>
        {/* add routes with layouts */}
        <Route path="/admin" component={Admin} />
        <Route path="/auth" component={Auth} />
        {/* add routes without layouts */}

        <Route path="/api_call" exact component={API_Call} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/" exact component={Index} />
        <Route path="/LoginButton" exact component={LoginButton} />
        <Route path="/LogoutButton" exact component={LogoutButton} />
        <Route path="/AuthContext" exact component={AuthContext} />
        <Route path="/Home" exact component={Home} />
        <Route path="/Login" exact component={LoginTry} />
        <Route path="/signup" exact component={Register} />
        <Route path="/profiletry" exact component={ProfileTry} />
        <Route path="/landing" exact component={Landing} />
        <Route path="/app" exact component={App} />
        <Route path="/masterform" exact component={MasterForm} />
        <Route path="/multistepprogressbar" exact component={MultiStepProgressBar} />
        <Route path="/step1" exact component={Step1} />
        <Route path="/step2" exact component={Step2} />
        <Route path="/step3" exact component={Step3} />
        {/* add redirect for first page */}
        <Redirect from="*" to="/" />
      </Switch>
    </BrowserRouter>
  </Auth0Provider>,
  document.getElementById("root")
);



