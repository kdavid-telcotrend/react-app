import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from '@auth0/auth0-react';
import AuthContext from "views/auth/AuthContext.js";
import LoginButton from "components/Login/LoginButton";
import LogoutButton from "components/Login/LogoutButton";

export default function Login() {
  const { user, isAuthenticated } = useAuth0();
  const { loginWithRedirect } = useAuth0();


  const authLocalStorage = () => {
    localStorage.setItem('authenticated', isAuthenticated);
    localStorage.setItem('username', user.name);
    console.log( window.localStorage.getItem('username'));
  };

 if(isAuthenticated) { 
  return (
    <React.Fragment>
    <AuthContext.Provider>
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
             
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">

                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      You are logged in.
                      <br />
                      You can logout with the following button:  
                      {window.localStorage.getItem("username")}
                    </label>
                  </div>
                  {/*
                  <b>{isAuthenticated ? "Auth" : 'NO auth'}</b> 
                  */}
                  <div className="text-center mt-6">
                    <LogoutButton
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="button"
                    >                    
                    </LogoutButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </AuthContext.Provider>
   </React.Fragment>
  );
} else {
  return (
   <React.Fragment>
    <AuthContext.Provider>
    <>
      <div className="container mx-auto px-4 h-full">
        <div className="flex content-center items-center justify-center h-full">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
             
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
                <div className="text-blueGray-400 text-center mb-3 font-bold">
                  <small>Sign in with credentials</small>
                </div>
                <form>
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Email"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      placeholder="Password"
                    />
                  </div>
                  <div>
                    <label className="inline-flex items-center cursor-pointer">
                      <input
                        id="customCheckLogin"
                        type="checkbox"
                        className="form-checkbox border-0 rounded text-blueGray-700 ml-1 w-5 h-5 ease-linear transition-all duration-150"
                      />
                      <span className="ml-2 text-sm font-semibold text-blueGray-600">
                        Remember me
                      </span>
                    </label>
                  </div>

                  <div className="text-center mt-6">
                    <LoginButton className="bg-lightBlue-500  text-xs font-bold uppercase px-4 py-2 rounded outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150"
                              type="button"
                              onClick={() =>{ loginWithRedirect() ; authLocalStorage() }}
                    >
                              Log In        
                    </LoginButton>
                  </div>
                </form>
              </div>
            </div>
            <div className="flex flex-wrap mt-6 relative">
              <div className="w-1/2">
                <a
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                  className="text-blueGray-200"
                >
                  <small>Forgot password?</small>
                </a>
              </div>
              <div className="w-1/2 text-right">
                <Link to="/auth/register" className="text-blueGray-200">
                  <small>Create new account</small>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    </AuthContext.Provider>
   </React.Fragment>
  );
}
}