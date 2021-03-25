import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand ml-4" href="/">
            <div className="bg-white p-2">
              <img
                src="https://s0.hfdstatic.com/sites/higux/v3.3.44/images/logo.svg"
                alt="The Hartford"
              />
            </div>
          </a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
