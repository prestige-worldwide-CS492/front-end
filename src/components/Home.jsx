import React, { Component } from "react";
import Navbar from "./Navbar";
import "../HomeP.css";
import Footer from "./Footer";

class Home extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <div className="background-container-soft  ">
          <div className="background-container-soft-content content ">
            <div
              id="hig-carousel"
              className="carousel slide"
              data-ride="carousel"
            >
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
                          The Hartford has been helping AARP members tailor
                          insurance to their unique needs for more than 30
                          years.
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-inner">
                      <section className="text-center">
                        <h4>Why Do Business with the hartford?</h4>
                        <div>
                          The Hartford has been helping AARP members tailor
                          insurance to their unique needs for more than 30
                          years.
                        </div>
                      </section>
                    </div>
                  </div>
                  <div className="item">
                    <div className="item-inner">
                      <section className="text-center">
                        <h4>Why Do Business with the hartford?</h4>
                        <div>
                          The Hartford has been helping AARP members tailor
                          insurance to their unique needs for more than 30
                          years.
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
            <div className="row body-row mx-auto mb-5">
              <div className="col-md-4 card">
                <div className="card-soft  blue-soft ">
                  <div className="card-soft-heading">
                    <strong className="card-soft-heading-title">
                      File A Claim
                    </strong>
                  </div>
                  <div className="card-soft-content">
                    <p>
                      Fill out information regarding an auto-related insurance
                      claim
                    </p>
                  </div>
                </div>
                <div className=" button">
                  <a
                    href="/SubmitClaim"
                    className="btn btn-secondary btn-lg btn-block btn-icon-lg"
                  >
                    <i class="icon icon-edit"></i>
                    <span>Submit A Claim</span>
                  </a>
                </div>
              </div>
              <div className="col-md-4 card">
                <div className="card-soft  blue-soft ">
                  <div className="card-soft-heading">
                    <strong className="card-soft-heading-title">
                      View Claim(s)
                    </strong>
                  </div>
                  <div className="card-soft-content">
                    <p>
                      View your submitted claim(s) below to access information
                    </p>
                  </div>
                </div>
                <div className="button">
                  <a
                    href="/ViewClaim"
                    className="btn btn-secondary btn-lg btn-block btn-icon-lg"
                  >
                    <i class="icon icon-read-book"></i>
                    <span>View Claim</span>
                  </a>
                </div>
              </div>
              <div className="col-md-4 card">
                <div className="card-soft  blue-soft ">
                  <div className="card-soft-heading">
                    <strong className="card-soft-heading-title">
                      Search for A Claim
                    </strong>
                  </div>
                  <div className="card-soft-content">
                    <p>Insurer Search For Claim below to process claims</p>
                  </div>
                </div>
                <div className="button">
                  <a
                    href="/SearchClaim"
                    className="btn btn-secondary btn-lg btn-block my-5 btn-icon-lg"
                  >
                    <i class="icon icon-search"></i>
                    <span>Search For A Claim</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="row mx-auto  buttonRow "></div>
          </div>
          <div className="mb-5 pt-5 test"></div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
