import React, { Component } from "react";

export default function Navbar() {
  return (
    <footer className="footer footer-thin" style={{ marginTop: "5rem" }}>
      <div className="container">
        <div className="row content-row">
          <div className="col-md-8 col-md-offset-2">
            <ul className="links list-inline">
              <li>
                <a href="https://www.thehartford.com/contact-the-hartford">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://www.thehartford.com/online-privacy-policy">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="https://www.thehartford.com/legal-notice">
                  Legal Notice
                </a>
              </li>
              <li>
                <a href="https://www.thehartford.com/accessibility-statement">
                  Accessibility Statement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
