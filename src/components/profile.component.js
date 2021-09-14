import React, { Component } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
import { Redirect } from "react-router-dom";
import styled from 'styled-components';
import { Link } from "react-router-dom";

import AuthService from "../services/auth.service";

const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
`;

export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }

  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/app" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {
    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;
    return (
      <div>
      <Navbar transparent/>
      <br/>
      <br/>
      <br/>
      <main>
      <section className="relative w-full h-full py-40 min-h-screen">
        <div
          className="absolute top-0 w-full h-full bg-blueGray-800 bg-no-repeat bg-full"
          style={{
            backgroundImage:
              "url(" + require("assets/img/register_bg_2.png").default + ")",
          }}
          >
          <div className="col-md-12">
            <div className="card card-container">
               <img
                src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
                alt="profile-img"
                className="profile-img-card"
               />

              {(this.state.userReady) ?
              <div>
                <h3>
                   <strong>{currentUser.username}</strong> Profile
                </h3>
                <p>
                  <strong>Token:</strong>{" "}
                  {currentUser.accessToken.substring(0, 20)} ...{" "}
                  {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                 <p>
                  <strong>Id:</strong>{" "}
                  {currentUser.id}
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  {currentUser.email}
                </p>
                <strong>Authorities:</strong>
                <ul>
                  {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                 </ul>
              </div>: null}
              <Link to="/masterform">
              <Button type="button">
                Step progress bar
              </Button>
            </Link>
            </div>
          </div>

        </div>

        <FooterSmall absolute />
      </section>
    </main>

      </div>
    );
  }
}
