
import React, { Component } from "react";
import Navbar from "./navbar";
//import axios from "axios";
//import { Redirect } from "react-router"
import "../App.Insurer.css";
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react' 

function SearchClaim() {
  const [searchTerm, setSearchTerm] = useState("");  
  return (
    <div>
      <Navbar></Navbar>
        <div className="container p-4">
        <div className="row-1">
              <div className="mt-4">               
                 <label htmlFor="last_name">Enter Claimants Last Name :  </label>          
                   <input 
                     type="text" placeholder="Search..."
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />
                   {JSONDATA.filter((val)=> {
                     if(searchTerm == "") {
                      return val
                     } else if (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }            
                  }).map((val, key) => {
                      return (
                      <div className="claimant" key={key}>
                        Last name:   <p>{val.last_name}</p>
                        First name:   <p>{val.first_name}</p>
                        Policy number:   <p>{val.insurance_number}</p>
                        Email:   <p>{val.email}</p>
                      </div>  
                    );
                  })}
           </div>
         </div>
        </div>
      </div>
   );  
}           
export default SearchClaim;
