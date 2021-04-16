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
          <div className="card top">
            <h2 className="underlined">
              View your claim
              <br />
              <small style={{ color: "#3a5a78" }}>
                All information is required unless it’s listed as optional.
              </small>
            </h2>
            <form
              onSubmit={this.handleSubmit}
              className="form-selectors"
              data-toggle="validator"
              data-disable="false"
              data-delay="999999"
            >
              <div className="row">
                <div className="mt-4 form-group col-md-6">
                  <label htmlFor="first-name" className="control-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first-name"
                    placeholder="Enter First Name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleFirstNameChange}
                    data-error="Please enter your first name."
                    required
                  />
                  <span
                    className="icon icon-attention form-control-feedback"
                    aria-hidden="true"
                  />
                  <div className="help-block with-errors" />
                </div>
                <div className="mt-4 form-group col-md-6">
                  <label htmlFor="last-name">Last Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="last-name"
                    placeholder="Enter last Name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleLastNameChange}
                    data-error="Please enter your last name."
                    required
                  />
                  <span
                    className="icon icon-attention form-control-feedback"
                    aria-hidden="true"
                  />
                  <div className="help-block with-errors" />
                </div>

                <div className="col-md-6 form-group">
                  <label htmlFor="policy-number">Policy Number</label>
                  <input
                    type="number"
                    className="form-control"
                    id="policy-number"
                    placeholder="Enter policy number"
                    name="policyNumber"
                    value={this.state.policyNumber}
                    onChange={this.handlePolicyNumberChange}
                    data-error="Please enter your policy number"
                    required
                  />
                  <span
                    className="icon icon-attention form-control-feedback"
                    aria-hidden="true"
                  />
                  <div className="help-block with-errors" />
                </div>
              </div>

              <button type="submit" className="btn btn-secondary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewClaim;
