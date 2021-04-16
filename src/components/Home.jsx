import React, { Component } from "react";
import Navbar from "./navbar";
import "../HomeP.css";

class Home extends Component {
  state = {};
  render() {
    return (
    <div>
        <div className="background-container-soft  ">
        <div className="background-container-soft-content content ">
        <div className="row my-row mx-auto">
            <div className="col-md-2 i-col ">
            <img src="https://ts0.hfdstatic.com/sites/higux/v3.3.44/images/logo.svg" className="img-thumbnail" alt="The Hartford" />  
            </div>
            <div className="col-md-10 title-col my-col ">
            <h1>Welcome to The Hartford Home Page</h1>
            <h3>We Make Online Claims Easy</h3>
            <h6>Start filing your claim with one click</h6>
            </div>
        </div>
        <div className="row body-row mx-auto mb-5">
            <div className="col-md-4 card">
            <div className="card-soft  blue-soft ">  
                <div className="card-soft-heading">
                <strong className="card-soft-heading-title">File A Claim</strong>
                </div>
                <div className="card-soft-content">    
                <p>Fill out information regarding an auto-related insurance claim</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 card">
            <div className="card-soft  blue-soft ">  
                <div className="card-soft-heading">
                <strong className="card-soft-heading-title">View Claim(s)</strong>
                </div>  
                <div className="card-soft-content">    
                <p>View your submitted claim(s) below to access information</p>
                </div>
            </div>
            </div>
            <div className="col-md-4 card">
            <div className="card-soft  blue-soft ">  
                <div className="card-soft-heading">
                <strong className="card-soft-heading-title">Search for A Claim</strong>
                </div>
                <div className="card-soft-content">    
                <p>Insurer Search For Claim</p>
                </div>
            </div>
            </div>
        </div>
        <div className="row mx-auto  buttonRow ">
            <div className="col-md-4 col-sm-12 my-3 button">
            <a href="/SubmitClaim" className = "btn btn-secondary btn-lg btn-block btn-icon-lg">
                <i class="icon icon-edit"></i><span>Submit A Claim</span></a>
            
            </div>
            <div className="col-md-4 col-sm-12 button">

            <a href="/ViewClaim" className = "btn btn-secondary btn-lg btn-block btn-icon-lg">
                <i class="icon icon-read-book"></i><span>View Claim</span></a>
            </div>
            <div className="col-md-4 col-sm-12 button">
            <a href="/SearchClaim" className = "btn btn-secondary btn-lg btn-block my-5 btn-icon-lg">
                <i class="icon icon-search"></i><span>Search For A Claim</span></a>
            </div>
        </div>
        </div>
        <div className="mb-5 pt-5 test">
        </div>               
    </div>
    <footer className="footer footer-thin">
        <div className="container">
        <div className="row content-row">
            <div className="col-md-8 col-md-offset-2">
            <ul className="links list-inline">
                <li><a href="https://www.thehartford.com/contact-the-hartford">Contact Us</a></li>
                <li><a href="https://www.thehartford.com/online-privacy-policy">Privacy Policy</a></li>
                <li><a href="https://www.thehartford.com/legal-notice">Legal Notice</a></li>
                <li><a href="https://www.thehartford.com/accessibility-statement">Accessibility Statement</a></li>
            </ul>
            <p className="copyright">©  The Hartford</p>
            </div>
            <div className="col-md-2">
            <img src="images/norton.svg" alt="Norton Secured - Powered by VeriSign" className="norton" />
            </div>
        </div>
        </div>
    </footer>
</div>
        

  

      
    );
  }
}

export default Home;
