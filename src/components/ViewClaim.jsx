
import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { Redirect } from "react-router";

class ViewClaim extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handlePolicyNumberChange = this.handlePolicyNumberChange.bind(this);
    
    this.state = {
      firstName: "",
      lastName: "",
      policyNumber: "",
    };
  }

  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };
  handlePolicyNumberChange = (event) => {
    this.setState({
      policyNumber: event.target.value,
    });
  };

  render() {
    if (this.state.redirect === "Success") {
      return <Redirect to="/Success" />;
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="container p-4">
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="row-1">
              <div className="mt-4">
                <label htmlFor="first-name">First Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="first-name"
                  placeholder="Enter First Name"
                  name="firstName"
                  value={this.state.firstName}
                  onChange={this.handleFirstNameChange}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="last-name">Last Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="last-name"
                  placeholder="Enter last Name"
                  name="lastName"
                  value={this.state.lastName}
                  onChange={this.handleLastNameChange}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="policy-number">Policy Number</label>
                <input
                  type="number"
                  className="form-control"
                  id="policy-number"
                  placeholder="Enter policy number"
                  name="policyNumber"
                   
                  value={this.state.policyNumber}
                  onChange={this.handlePolicyNumberChange}
                />
              </div>
            </div>
            
           
            <button type="submit" className="btn btn-primary">
            Submit                            
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default ViewClaim;
