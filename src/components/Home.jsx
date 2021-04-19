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

      <div id="hig-carousel" className="carousel slide" data-ride="carousel">
        <div className="container">
          <ol className="carousel-indicators">
            <li
              data-target="#hig-carousel"
              data-slide-to={0}
              className="active"
            />
            <li data-target="#hig-carousel" data-slide-to={1} />
            <li data-target="#hig-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="item active">
              <div className="item-inner">
                <section className="text-center">
                  <h4>Why Do Business with the hartford?</h4>
                  <div>
                    The Hartford has been helping AARP members tailor insurance
                    to their unique needs for more than 30 years.
                  </div>
                </section>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <section className="text-center">
                  <h4>Why Do Business with the hartford?</h4>
                  <div>
                    The Hartford has been helping AARP members tailor insurance
                    to their unique needs for more than 30 years.
                  </div>
                </section>
              </div>
            </div>
            <div className="item">
              <div className="item-inner">
                <section className="text-center">
                  <h4>Why Do Business with the hartford?</h4>
                  <div>
                    The Hartford has been helping AARP members tailor insurance
                    to their unique needs for more than 30 years.
                  </div>
                </section>
              </div>
            </div>
          </div>
          <a
            className="left carousel-control"
            href="#hig-carousel"
            data-slide="prev"
          >
            <i className="icon icon-carousel-left" />
          </a>
          <a
            className="right carousel-control"
            href="#hig-carousel"
            data-slide="next"
          >
            <i className="icon icon-carousel-right" />
          </a>
        </div>
      </div>

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
