import React, { Component } from "react";
import Navbar from "./Navbar";

class Success extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <h1>Success Page</h1>
        </div>
      </div>
    );
  }
}

export default Success;
