/**
 * Copyright 2021 Presige Worldwide
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Claim from "./components/Claim.jsx";
import Home from "./components/Home.jsx";
import SearchClaim from "./components/SearchClaim.jsx";
import SubmitClaim from "./components/SubmitClaim.jsx";
import ViewClaim from "./components/ViewClaim.jsx";
import Success from "./components/Success.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>

      <Route path="/" exact component={Home} />
      <Route path="/submit-claim" component={SubmitClaim} />
      <Route path="/view-claim" component={ViewClaim} />
      <Route path="/search-claim" component={SearchClaim} />
      <Route path="/claim/:claimID" component={Claim} />
      <Route path="/success" component={Success} />

      <Footer></Footer>
    </BrowserRouter>
  );
}
