import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer footer-thin">
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
              <p className="copyright">Prestige Worldwide</p>
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
