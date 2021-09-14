import React, { Component } from "react";
import {
  Form,
  
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  CardText,
  CardFooter
} from "reactstrap";

import styled from 'styled-components';
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Navbar from "components/Navbars/AuthNavbar.js";

import MultiStepProgressBar from "./MultiStepProgressBar";

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

class MasterForm extends Component {
  constructor(props) {
    super(props);

    // Set the intiial input values
    this.state = {
      currentStep: 1,
      index: "",
      email: "",
      username: "",
      password: ""
    };

    // Bind the submission to handleChange()
    this.handleChange = this.handleChange.bind(this);

    // Bind new functions for next and previous
    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
  }

  // Use the submitted data to set the state
  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  }

  // Trigger an alert on form submission
  handleSubmit = (event) => {
    event.preventDefault();
    //const { email, username, password } = this.state;
  };

  // Test current step with ternary
  // _next and _previous functions will be called on button click
  _next(value) {
    //console.log("hii", value);
    let currentStep = this.state.currentStep;
    //let indexStep= this.state.index;
    // If the current step is 1 or 2, then add one on "next" button click
    currentStep = currentStep >= 2 ? 3 : currentStep + 1;
    this.setState({
      currentStep: currentStep
    });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    // If the current step is 2 or 3, then subtract one on "previous" button click
    currentStep = currentStep <= 1 ? 1 : currentStep - 1;
    this.setState({
      currentStep: currentStep
    });
  }

  // The "next" and "previous" button functions
  get previousButton() {
    let currentStep = this.state.currentStep;

    // If the current step is not 1, then render the "previous" button
    if (currentStep !== 1) {
      return (
        <Button color="secondary float-left" onClick={this._prev}>
          Previous
        </Button>
      );
    }

    // ...else return nothing
    return null;
  }

  get nextButton() {
    let currentStep = this.state.currentStep;
    // If the current step is not 3, then render the "next" button
    if (currentStep < 3) {
      return (
        <Button color="primary float-right" onClick={this._next}>
          Next
        </Button>
      );
    }
    // ...else render nothing
    return null;
  }

  get submitButton() {
    let currentStep = this.state.currentStep;

    // If the current step is the last step, then render the "submit" button
    if (currentStep > 2) {
      return <Button color="primary float-right">Submit</Button>;
    }
    // ...else render nothing
    return null;
  }

  render() {
    return (
      <>
        <div>
      <Navbar />
      <br/>
      <br/>
      <br/>
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

        <Form onSubmit={this.handleSubmit}>
          <Card>
            <CardHeader>Search for your dream Car or Motor</CardHeader>
            <br/>
            <CardBody>
              <CardTitle>
                <MultiStepProgressBar currentStep={this.state.currentStep} />
              </CardTitle>
              <CardText />
              <Step1
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.email}
                next={this._next}
              />
              <Step2
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.username}
              />
              <Step3
                currentStep={this.state.currentStep}
                handleChange={this.handleChange}
                email={this.state.password}
              />
            </CardBody>
            <CardFooter>
              {this.previousButton}
              {this.nextButton}
              {this.submitButton}
            </CardFooter>
          </Card>
        </Form>
        </div>
      </section>
    </main>
  </div>
  </>
  );
  }
}

export default MasterForm;

