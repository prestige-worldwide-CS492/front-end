import React, { Component } from "react";
import Navbar from "./navbar";

class Success extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <h1>
            <div className="alert alert-success text-center" role="alert">
              <strong>Success!</strong> Your claim was successfully submitted
            </div>
          </h1>
        </div>
      </div>
    );
  }
}

export default Success;
