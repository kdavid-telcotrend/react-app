/*eslint-disable*/
import React,{useState, Component} from "react";
import Select from 'react-select'
// components
import IndexDropdown from "components/Dropdowns/IndexDropdown.js";
import i18n from "translations/i18n.js/";
import { useAuth0 } from '@auth0/auth0-react';
import { useTranslation } from "react-i18next";

export default function Navbar(props) {

const { user, isAuthenticated } = useAuth0();

const [navbarOpen, setNavbarOpen] = React.useState(false);
const [language, setLanguage] = useState('en');
const { t } = useTranslation();

const userLoggedIn = window.localStorage.getItem("authenticated");
const username = window.localStorage.getItem("username");

const [selected, setSelected] = React.useState([]);
const handleChange = value => {
  setSelected(selected => [...selected, value]);
  handleOnclickSelect(value);
};

const scrollToTop = () =>{
  window.scrollTo({
    top: 0, 
    behavior: 'smooth'
  });
};

const options = [
  { value: 'arab', label: 'عربى' },
  { value: 'en', label: 'English' },
  { value: 'es', label: 'Español' },
  { value: 'zh', label: '中国人' },
  { value: 'hu', label: 'Magyar' }
]

const handleOnclickSelect=(event)=>{
  //event.preventDefault();
  setLanguage(event.value);
  i18n.changeLanguage(event.value);
}

  return (
    <>
      <nav className="top-0 fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-white shadow">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <ul>
              <button id="para1"
              className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                <il class="hover:text-blueGray-500 text-blueGray-700  py-4 lg:py-2 flex items-center uppercase " onClick={scrollToTop}> React Presentation
                </il>
              </button>

            </ul>
              <button
              className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
              > 
                <i className="fas fa-bars"></i>
              </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none" +
              (navbarOpen ? " block" : " hidden")
            }
            id="example-navbar-warning"
          >
            <ul className="flex flex-col lg:flex-row list-none mr-auto">
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://reactjs.org/"
                >
                  <i className="text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2" />{" "}
                  Docs
                </a>
              </li>
            </ul>
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="flex items-center">
                <IndexDropdown />
              </li>
              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/telcotrend"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Share</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://twitter.com/telcotrend"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-twitter text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">Tweet</span>
                </a>
              </li>

              <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500  text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                  href="https://www.linkedin.com/company/telcotrend/"
                  target="_blank"
                >
                  <i className="text-blueGray-400 fab fa-linkedin blue-color-linkedin text-lg leading-lg " />
                  <span className="lg:hidden inline-block ml-2">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm py-2 px-4 font-normal block w-190-px whitespace-nowrap bg-transparent text-blueGray-700"> 
            <Select onChange={handleChange} options={options} defaultValue={{ label: "Select Language", value: 0 }}  />           
          </div>
        </div>
      </nav>    
    </>
  );
}
