import React, { Component } from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import SubmitClaim from "./components/SubmitClaim";
import ViewClaim from "./components/ViewClaim";

function App() {
  return (
    <Router>
      <div></div>
      <Route path="/" exact component={Home} />
      <Route path="/SubmitClaim" component={SubmitClaim} />
      <Route path="/ViewClaim" component={ViewClaim} />
    </Router>
  );
}

export default App;
