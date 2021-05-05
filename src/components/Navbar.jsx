import React from "react";

export default function Navbar() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navBar"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <i className="icon icon-menu" />
            </button>
            <a className="navbar-brand" href="/">
              <img
                alt="The Hartford"
                src="https://ts0.hfdstatic.com/sites/higux/v3.3.44/images/logo.svg"
              />
            </a>
          </div>
        </div>
      </div>
      <header
        className="navbar navbar-default collapse navbar-collapse"
        id="navBar"
      >
        <div className="navbar-primary" id="primaryNav">
          <div className="container">
            <div className="row">
              <ul className="nav navbar-nav navbar-left">
                <button
                  type="button"
                  className="navbar-toggle-close collapsed"
                  data-toggle="collapse"
                  data-target="#navBar"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <i className="icon icon-close" />
                </button>
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Employer/Sponsor View
                    <i className="icon icon-users" />
                    <i className="icon icon-double-caret" />
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">First Link Employer View</a>
                    </li>
                    <li>
                      <a href="#">Second Link Sponsor View</a>
                    </li>
                    <li role="separator" className="divider" />
                    <li>
                      <a href="#">Separated link</a>
                    </li>
                  </ul>
                </li>
              </ul>
              <ul className="nav navbar-nav navbar-icons navbar-right">
                <li className="hidden-sm hidden-xs">
                  <a href="#">
                    <i className="icon icon-questions" />
                    <span>Help</span>
                  </a>
                </li>
                <li className="dropdown hidden-sm hidden-xs">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon icon-my-account">
                      <span className="sr-only">My Account</span>
                    </i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="#">User Login</a>
                    </li>
                    <li>
                      <a href="#">Account Information</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="navbar-secondary" id="secondaryNav">
          <div className="container">
            <div className="row">
              <ul className="nav navbar-nav">
                <li className="dropdown">
                  <a
                    href="#"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon icon-dashboard" />
                    <span>Dashboard</span>
                  </a>
                  <div className="dropdown-menu">
                    <div className="mega-menu">
                      <div className="col-md-6 mega-menu-left">
                        <h3>Links</h3>
                        <ul>
                          <li>
                            <a href="/">Home</a>
                          </li>
                          <li>
                            <a href="/submit-claim">Submit Claim</a>
                          </li>
                          <li>
                            <a href="view-claim">View Claim</a>
                          </li>
                          <li>
                            <a href="search-claim">Search Claim</a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6 mega-menu-right">
                        <h3>The Hartford</h3>
                        <p>Overcoming Obstacles Together</p>
                        <img
                          src="https://s0.hfdstatic.com/sites/the_hartford/pubimgs/1444704513553.jpg?v=2020-11-04_100005734"
                          alt="play video"
                          className="img-responsive"
                        />
                        <ul>
                          <li>
                            {" "}
                            <a href="https://www.thehartford.com/about-us/our-programs">
                              We're here to put human beings first
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="dropdown">
                  <a
                    href="/search-claim"
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    role="button"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i className="icon icon-document" />
                    <span>Claims</span>
                  </a>
                </li>

                <li className="visible-xs visible-sm">
                  <a href="#">
                    <i className="icon icon-my-account" />
                    <span>My Profile</span>
                  </a>
                </li>
                <li className="visible-xs visible-sm">
                  <a href="#">
                    <i className="icon icon-questions" />
                    <span>Help</span>
                  </a>
                </li>
              </ul>
              <div className="mobile-logout">
                <a href="#">
                  <button className="btn btn-secondary-paired btn-block">
                    Logout
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}
