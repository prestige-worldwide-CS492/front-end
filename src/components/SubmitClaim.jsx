import React, { Component } from "react";
import Navbar from "./navbar";
import axios from "axios";

class SubmitClaim extends Component {
  state = {};

  constructor(props) {
    super(props);

    this.handlePolicyNumberChange = this.handlePolicyNumberChange.bind(this);
    this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
    this.handleLastNameChange = this.handleLastNameChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      policyNumber: "",
      firstName: "",
      lastName: "",
      category: "",
      description: "",
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("form submitted!");

    const newClaim = {
      policy_number: this.state.policyNumber,
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      category: this.state.category,
      description: this.state.description,
    };
    console.log(newClaim);
    // axios.post("http://localhost:4000/claims", newClaim).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
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

  render() {
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
                <option value="option1">option 1</option>
                <option value="option2">option 2</option>
                <option value="option3">option 3</option>
                <option value="option4">option 4</option>
                <option value="option5">option 5</option>
              </select>
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
