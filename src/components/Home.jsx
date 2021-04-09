import React, { Component } from "react";
import Navbar from "./navbar";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="container">
          <h1>Home page</h1>
          <a href="/SubmitClaim" className="btn btn-primary">
            Submit a claim
          </a>
          <a href="/ViewClaim" className="btn btn-primary">
            View a Submitted claim
          </a>
          <a href="/SearchClaim" className="btn btn-primary">
            View the Insurer Page
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
