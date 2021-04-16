// @ts-check
import React, { Component } from "react";
import Navbar from "./navbar";
import "../App.Insurer.css";
//import axios from "axios";
//import { Redirect } from "react-router";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
import { useHistory } from "react-router";

function SearchClaim() {
  const [claims, setClaims] = useState([])
  const history = useHistory()

  const query = {
    firstName: "",
    lastName: "",
    policyNumber: ""
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container p-4">
        <div className="mt-4">
          <label htmlFor="last_name">Enter Claimants Last Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(event) => {
              query.lastName = event.target.value;
            }}
          />

          <label htmlFor="first_name">Enter Claimants First Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(event) => {
              query.firstName = event.target.value;
            }}
          />

          <label htmlFor="policy_number">Enter Claimants Policy Number</label>
          <input
            type="text"
            className="form-control"
            placeholder="Search..."
            onChange={(event) => {
              query.policyNumber = event.target.value;
            }}
          />

          <button type="submit" className="btn btn-primary" onClick={() => {
            let base = "http://localhost:8080/claims"

            if (query.firstName !== "") base += `?firstName=${query.firstName}`
            if (query.lastName !== "") base += `?firstName=${query.lastName}`
            if (query.policyNumber !== "") base += `?firstName=${query.policyNumber}`

            fetch(base)
              .then(res => res.json())
              .then(res => setClaims(res))
          }}>Submit</button>


          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="col-xs-2">
                  LAST NAME
                </th>
                <th scope="col" className="col-xs-2">
                  FIRST NAME
                </th>
                <th scope="col" className="col-xs-2">
                  POLICY NUMBER
                </th>
                <th scope="col" className="col-xs-2">
                  ACCIDENT ADDRESS
                </th>
                <th scope="col" className="col-xs-10">
                  ACCIDENT DESCRIPTION FROM THE CLAIMANT
                </th>
              </tr>
            </thead>

            <tbody>
              {claims.map((claim, i) =>
                <tr key={i} onClick={() => history.push(`/Claim/${claim._id}`)}>
                  <td>{claim.lastName}</td>
                  <td>{claim.firstName}</td>
                  <td>{claim.policyNumber}</td>
                  <td>{claim.address}</td>
                  <td>{claim.description}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default SearchClaim;
