import React, { Component } from 'react';
import Navbar from "./navbar";

class Home extends Component {
    state = {  }
    render() { 
        return (  
            <div>
                <Navbar></Navbar>
                <h1>Home page</h1>
                <a href="/SubmitClaim" class="btn btn-primary">Submit a claim</a>
                <a href="/ViewClaim" class="btn btn-primary">view Submitted a claim</a>
            </div>
            
        );
    }
}
 
export default Home;