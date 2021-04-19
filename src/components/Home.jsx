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
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <ul className="breadcrumb">
        <li className="active">Home</li>
      </ul>

      <div className="row card top">
        <div className="col-md-4">
          <div className="card-soft blue-soft">
            <div className="card-soft-heading">
              <strong className="card-soft-heading-title">File A Claim</strong>
            </div>

            <div className="card-soft-content">
              <p>
                Fill out information regarding an auto-related insurance claim
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-soft blue-soft">
            <div className="card-soft-heading">
              <strong className="card-soft-heading-title">View Claim(s)</strong>
            </div>

            <div className="card-soft-content">
              <p>View your submitted claim(s) below to access information</p>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card-soft blue-soft">
            <div className="card-soft-heading">
              <strong className="card-soft-heading-title">
                Search for A Claim
              </strong>
            </div>

            <div className="card-soft-content">
              <p>Insurer Search For Claim</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row card">
        <div className="col-md-4">
          <a
            className="btn btn-lg btn-secondary btn-block btn-icon-lg"
            href="/submit-claim"
          >
            <i className="icon icon-edit" />
            <span>Submit a Claim</span>
          </a>
        </div>

        <div className="col-md-4">
          <a
            className="btn btn-lg btn-secondary btn-block btn-icon-lg"
            href="/view-claim"
          >
            <i className="icon icon-read-book" />
            <span>View a Claim</span>
          </a>
        </div>

        <div className="col-md-4">
          <a
            className="btn btn-lg btn-secondary btn-block btn-icon-lg"
            href="search-claim"
          >
            <i className="icon icon-search" />
            <span>Search for a Claim</span>
          </a>
        </div>
      </div>
    </div>
  );
}
