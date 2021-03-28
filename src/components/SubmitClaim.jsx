import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";
import { Redirect } from "react-router";

class SubmitClaim extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.handlePolicyNumberChange = this.handlePolicyNumberChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleFullAddress = this.handleFullAddress.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      policyNumber: "",
      firstName: "",
      lastName: "",
      category: "",
      description: "",
      redirect: "",
      fullAddress: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    //if valid then:
    console.log("form submitted!");

    const newClaim = {
      policy_number: this.state.policyNumber,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      category: this.state.category,
      description: this.state.description,
      address: this.state.fullAddress,
    };
    console.log(newClaim);

    fetch('http://localhost:8080/claims', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newClaim)
    })
      .then(x => x.status === 200 && this.setState({ redirect: 'Success' }))
 
    this.setState({
      policyNumber: "",
      firstName: "",
      lastName: "",
      category: "",
      description: "",
    });
  }

  handlePolicyNumberChange = (event) => {
    this.setState({
      policyNumber: event.target.value,
    });
  };

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

  handleCategoryChange = (event) => {
    this.setState({
      category: event.target.value,
    });
  };

  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  handleFullAddress = (event) => {
    this.setState({
      fullAddress: event.target.value,
    });
  };

  render() {
    if (this.state.redirect === "Success") {
      return <Redirect to="/Success" />;
    }
    return (
      <div>
        <Navbar></Navbar>
        <div className="container p-3">
          <form onSubmit={this.handleSubmit} method="POST">
            <div className="row">
              <div className="col">
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
              <div className="col">
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
              <div className="col">
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
            </div>
            <div className="mt-3">
              <label htmlFor="category">Choose a category</label>
              <select
                className="form-control"
                name="category"
                id="category"
                value={this.state.category}
                onChange={this.handleCategoryChange}
              >
                <option value="Auto-liability-coverage">
                  Auto liability coverage
                </option>
                <option value="Uninsured-and-under-insured-motorist-coverage">
                  Uninsured and under-insured motorist coverage{" "}
                </option>
                <option value="Comprehensive-coverage">
                  Comprehensive Coverage
                </option>
                <option value="Collision-coverage">Collision Coverage</option>
                <option value="Medical-payments-coverage">
                  Medical payments Coverage
                </option>
                <option value="Personal-injury-protection">
                  Personal injury protection
                </option>
              </select>
            </div>
            <div className="mt-3">
              <label htmlFor="full-address">Address</label>
              <input
                type="text"
                className="form-control"
                value={this.state.fullAddress}
                onChange={this.handleFullAddress}
              />
            </div>
            <div className="mt-3">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                type="text"
                name="description"
                id="description"
                rows="4"
                value={this.state.description}
                onChange={this.handleDescriptionChange}
              />
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

export default SubmitClaim;
