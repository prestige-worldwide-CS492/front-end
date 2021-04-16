// @ts-check
import React, { Component } from "react";
import Navbar from "./navbar";
import "../App.Insurer.css";
//import axios from "axios";
//import { Redirect } from "react-router";
import JSONDATA from "./MOCK_DATA.json";
import { useState } from "react";
import { Redirect } from "react-router";

function SearchClaim(rows) {
  const [searchTerm, setSearchTerm] = useState("");
  // let JSONDATA = [];
  // fetch("http://localhost:8080/claims")
  //   .then((response) => response.json())
  //   .then((data) => (JSONDATA = data))
  //   .then(() => console.log(JSONDATA));

  function handleClick(claimID) {
    console.log("id:" + claimID);
    window.location.href = `/Claim/${claimID}`;
  }
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
              setSearchTerm(event.target.value);
            }}
          />
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

            {JSONDATA.filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.lastName.toLowerCase().includes(searchTerm.toLowerCase())
              ) {
                return val;
              } else if (
                val.policyNumber
                  .toString()
                  .toLowerCase()
                  .includes(searchTerm.toLowerCase())
              ) {
                return val;
              }
            }).map((val, key) => {
              return (
                <tbody>
                  <tr onClick={() => handleClick(val.policyNumber)}>
                    <td>
                      <span className="data-prefix-xs xs-prefix-vertical">
                        LAST NAME
                      </span>
                      {val.lastName}
                    </td>
                    <td>
                      <span className="data-prefix-xs xs-prefix-vertical">
                        FIRST NAME
                      </span>
                      {val.firstName}
                    </td>
                    <td>
                      <span className="data-prefix-xs xs-prefix-vertical">
                        POLICY NUMBER
                      </span>
                      {val.policyNumber}
                    </td>
                    <td>
                      <span className="data-prefix-xs xs-prefix-vertical">
                        ACCIDENT ADDRESS
                      </span>
                      {val.address}
                    </td>
                    <td>
                      <span className="data-prefix-xs xs-prefix-vertical">
                        ACCIDENT DESCRIPTION FROM THE CLAIMANT
                      </span>
                      {val.description}
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
    </div>
  );
}
export default SearchClaim;
