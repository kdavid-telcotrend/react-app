import React, { Component } from "react";
import Navbar from "components/Navbars/AuthNavbar.js";
import FooterSmall from "components/Footers/FooterSmall.js";
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
  width: 250px;
`;

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      username: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();

    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.login(this.state.username, this.state.password).then(
        () => {
          this.props.history.push("/profiletry");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      <div>
      <Navbar transparent/>
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
 
                <Link to="/motors">
                  <Button type="button">
                     Motors
                  </Button>
                </Link>
                <br/>
                <Link to="/autos">
                  <Button type="button">
                     Autos
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
