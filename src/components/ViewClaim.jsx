import React, { Component } from "react";
import Navbar from "./navbar";

class ViewClaim extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container bg-info ">
          <h1>View claim page</h1>
        </div>
      </div>
    );
  }
}

export default ViewClaim;
