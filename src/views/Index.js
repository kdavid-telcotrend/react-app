/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { useTranslation } from "react-i18next";

export default function Index() {
  const { t } = useTranslation();
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
              {t("introduction")}
              </h2>
              <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        {t("telcotrend_first_line")}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        {t("telcotrend_second_line")}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        {t("telcotrend_third_line")}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        {t("telcotrend_fourth_line")}
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                        {t("telcotrend_fifth_line")}
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src={require("assets/img/bg3.png").default}
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500" id='development'>
                <img
                  alt="..."
                  src={require("assets/img/figure1.png").default}
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white text-center">
                    Development
                  </h4>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Software
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We develop custom software solutions
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Back-end, front-end
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        We provide both back-end and front-end development services
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Middleware
                        </h6>
                      <p className="mb-4 text-blueGray-500">
                       We are experienced in middleware solutions
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Agile
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        Typically, we work in Agile
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  Consulting
                </h3>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          We provide architecture design and business analysis services
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          We offer project management and scrum master leadership
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          SAP consulting and Business Intelligence are our strengths
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fa fa-list"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          We re-work applications previously prepared by others
                        </h4>
                      </div>
                    </div>
                  </li>

                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0" id='projects'>
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/figure2.png").default}
              />
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
       

          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                <div className="mt-10">
                  <h3 className="text-3xl mb-2 font-semibold leading-normal" id='other_services'>
                    Other Services
                  </h3>
                  <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                    Telcotrend also provides solutions in Testing, Mobile Application Development, Application Operation
                  </p>
                </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                    <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/js.png"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        Testing
                      </p>
                    </div>
                    <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/angular.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                       Mobile Application Development
                      </p>
                    </div>
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                      <img
                        alt="..."
                        className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                        src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/logos/vue.jpg"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                       Application Operation
                      </p>
                    </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
            <img
                        alt="..."
                        className="align-middle border-none  pic-720-600 h-auto rounded-lg"
                        src={require("assets/img/figure3.png").default}
                      />

            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 id="beautiful-example" className="font-semibold text-4xl">Products</h2>

          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className=" w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Mobile apps, games
                  </h5>
                  
                    <div className="picture-resize hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/candyventure1.jpg").default}
                      />
                    </div>
                    <div className="text-white">
                    A part of Telcotrend’s team is engaged in game and mobile app development. You can find our mobile app games brand "Cellular Bits" in Google Play and App Store.
                    <br/>
                    In addition to mobile games we develop business related mobile applications, that are released by our clients to their users.
                    <br/>
                    
                    </div>
                  
                  <div className="text-orange-500"> 
                  <a href="https://www.w3schools.com">Cellular Bits...</a>
                  </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Reactor
                  </h5>
                    <div className="picture-resize hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/reactor1.png").default}
                      />
                    </div>
                    <div className="text-white">
                    Telcotrend REACTOR is a real-time order management support system, with integrated shopping cart handling and rule engine functions.
                    <br/>
                    Telcotrend REACTOR, can be used in any sales area by setting up the domain-specific rules and product structures in the system. Telcotrend REACTOR functions are based on pre-determined rulesets, that can be configured according to the client´s needs at any time.
                    <br/>
                    Telcotrend REACTOR's exceptional performance is guaranteed, even in extremely complex business environments.
                    </div>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Telemax
                  </h5>
                    <div className="picture-resize hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src={require("assets/img/telemax1.jpg").default}
                      />
                    </div>
                    <div className="text-white">
                    TELEMAX is Telcotrend’s billing system for the telecommunications industry.
                    <br/>
                    TELEMAX’s main functions:
                    <br/>
                    <ul>
                       <li>- Usage data collection and rating</li>
                       <li>- Discounting</li>
                       <li>- Built-in product catalogue</li>
                       <li>- Powerful billing engine</li>
                       <li>- Invoice preparation</li>
                       <li>- Account- and collection management</li>
                       <li>- Self-care functions</li>
                       <li>- Report generation</li>
                    </ul>
                    <br/>
                    For more information, please contact us at our contact details below!
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div class="">
      <img
          className=""
          src={require("assets/img/partners.png").default}
          alt="..."
        />
      </div>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto mt-16" id='contacts'>
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <h3 className="font-semibold text-3xl">
                Kapcsolat
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                1146 Budapest, Thököly street 76. <br/>
                +36 20 936 2949
              </p>
              <div className="flex flex-wrap text-center lg:text-left">

          </div>
              <div className="sm:block flex flex-col mt-10">

                <button
                        className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <a className="fab fa-twitter" href="https://twitter.com/telcotrend"></a>
                     </button>
                     <button
                        className="bg-white text-lightBlue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <a className="fab fa-facebook-square" href="https://www.facebook.com/telcotrend"></a>
                      </button>
                      <button
                        className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <a class='fab fa-linkedin blue-color-linkedin' href="https://www.linkedin.com/company/telcotrend/"></a>
                      </button>
                     <button
                        className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <i className="fab fa-github"></i>
                      </button>
                      <button
                        className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                        type="button"
                     >
                        <a className="fa fa-envelope" href="mailto:contact@telcotrend.com" aria-hidden="true"></a>
                      </button>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
