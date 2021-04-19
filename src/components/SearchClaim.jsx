import React, { Component } from "react";
import Navbar from "./navbar";
import "../App.Insurer.css";
//import axios from "axios";
//import { Redirect } from "react-router";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
import { useHistory } from "react-router";
import "../formLayout.css";

function SearchClaim() {
  const [claims, setClaims] = useState([]);
  const history = useHistory();

  const query = {
    firstName: "",
    lastName: "",
    policyNumber: "",
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="container p-4">
        <div className="mt-4 ">
          <div className="background-container-soft">
            <div className="background-container-soft-content">
              <div className="form-group">
                <label htmlFor="last_name" className="label-align">
                  Enter Claimant's Last Name
                </label>
                <input
                  name="last_name"
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(event) => {
                    query.lastName = event.target.value;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="first_name" className="label-align">
                  Enter Claimant's First Name
                </label>
                <input
                  name="first_name"
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(event) => {
                    query.firstName = event.target.value;
                  }}
                />
              </div>
              <div className="form-group">
                <label htmlFor="policy_number" className="label-align">
                  Enter Claimant's Policy Number
                </label>
                <input
                  name="policy_number"
                  type="text"
                  className="form-control"
                  placeholder="Search..."
                  onChange={(event) => {
                    query.policyNumber = event.target.value;
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-secondary"
                onClick={() => {
                  let base = "http://localhost:8080/claims?";

                  if (query.firstName !== "")
                    base += `firstName=${query.firstName}&`;
                  if (query.lastName !== "")
                    base += `lastName=${query.lastName}&`;
                  if (query.policyNumber !== "")
                    base += `policyNumber=${query.policyNumber}`;

                  fetch(base)
                    .then((res) => res.json())
                    .then((res) => setClaims(res));
                }}
              >
                Submit
              </button>
            </div>
          </div>

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
              {claims.map((claim, i) => (
                <tr key={i} onClick={() => history.push(`/Claim/${claim._id}`)}>
                  <td>{claim.lastName}</td>
                  <td>{claim.firstName}</td>
                  <td>{claim.policyNumber}</td>
                  <td>{claim.address}</td>
                  <td>{claim.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default SearchClaim;
