import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import SubmitClaim from "./components/SubmitClaim";
import ViewClaim from "./components/ViewClaim";
import Success from "./components/Sucess";
import Claim from "./components/Claim";
import SearchClaim from "./components/SearchClaim";

function App() {
  return (
    <Router>
      <div></div>
      <Route path="/" exact component={Home} />
      <Route path="/SubmitClaim" component={SubmitClaim} />
      <Route path="/ViewClaim" component={ViewClaim} />
      <Route path="/Success" component={Success} />
      <Route path="/Claim/:claimID" component={Claim} />
      <Route path="/SearchClaim" component={SearchClaim} />
    </Router>
  );
}

export default App;
