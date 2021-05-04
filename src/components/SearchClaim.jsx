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

import React, { useRef, useState } from "react";
import { Link, useHistory } from "react-router-dom";

export default function SearchClaim() {
  const lastName = useRef(null);
  const firstName = useRef(null);
  const policyNumber = useRef(null);

  const [claims, setClaims] = useState([]);

  const history = useHistory();

  const searchHandler = () => {
    const searchParams = new URLSearchParams();

    if (lastName.current.value !== "")
      searchParams.set("lastName", lastName.current.value);
    if (firstName.current.value !== "")
      searchParams.set("firstName", firstName.current.value);
    if (policyNumber.current.value !== "")
      searchParams.set("policyNumber", policyNumber.current.value);

    fetch(
      `http://${
        window.location.hostname
      }:8080/insurer/claims?${searchParams.toString()}`,
      { credentials: "include" }
    )
      .then((res) => res.json())
      .then((res) => setClaims(res));
  };

  return (
    <div className="container">
      <ul className="breadcrumb">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li className="active">Search</li>
      </ul>

      <div className="card row top">
        <div className="form-group">
          <label htmlFor="last_name" className="label-align">
            Last Name
          </label>
          <input
            name="last_name"
            type="text"
            className="form-control"
            placeholder="Enter Last Name"
            ref={lastName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="first_name" className="label-align">
            First Name
          </label>
          <input
            name="first_name"
            type="text"
            className="form-control"
            placeholder="Enter First Name"
            ref={firstName}
          />
        </div>

        <div className="form-group">
          <label htmlFor="policy_number" className="label-align">
            Policy Number
          </label>
          <input
            name="policy_number"
            type="text"
            className="form-control"
            placeholder="Enter Policy Number"
            ref={policyNumber}
          />
        </div>

        <input
          type="button"
          value="Search"
          className="btn btn-secondary"
          onClick={searchHandler}
        />
      </div>

      {claims.length > 0 && (
        <div className="card row">
          <table className="table table-striped">
            <thead>
              <tr>
                <th scope="col" className="col-xs-2">
                  Last Name
                </th>
                <th scope="col" className="col-xs-2">
                  First Name
                </th>
                <th scope="col" className="col-xs-2">
                  Policy Number
                </th>
                <th scope="col" className="col-xs-2">
                  Address
                </th>
                <th scope="col" className="col-xs-10">
                  Description
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
      )}
    </div>
  );
}
