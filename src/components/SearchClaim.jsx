
import React, { Component } from "react";
import Navbar from "./navbar";
import "../App.Insurer.css";
//import axios from "axios";
//import { Redirect } from "react-router"
import JSONDATA from './MOCK_DATA.json'
import {useState} from 'react' 

function SearchClaim(rows) {
  const [searchTerm, setSearchTerm] = useState(""); 
  return (
    <div>
      <Navbar></Navbar>
        <div className="container p-4">    
              <div className="mt-4">               
                 <label htmlFor="last_name">Enter Claimants Last Name</label>          
                   <input 
                     type="text" 
                     className="form-control"
                     placeholder="Search..."
                      onChange={(event) => {
                        setSearchTerm(event.target.value);
                      }}
                    />                   
                     <table class="table table-striped">
                          <thead>
                              <tr>
                              <th scope="col" class="col-xs-2">LAST NAME</th>
                              <th scope="col" class="col-xs-2">FIRST NAME</th>
                              <th scope="col" class="col-xs-2">POLICY NUMBER</th>
                              <th scope="col" class="col-xs-2">EMAIL ADDRESS</th>
                              <th scope="col" class="col-xs-2">ACCIDENT ADDRESS</th>
                              <th scope="col" class="col-xs-10">ACCIDENT REPORT</th>
                              </tr>
                              </thead>                                 
                    
                   {JSONDATA.filter((val)=> {
                     if(searchTerm == "") {
                      return val
                     } else if (val.last_name.toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }   else if (val.insurance_number.toString().toLowerCase().includes(searchTerm.toLowerCase())) {
                      return val
                    }         
                  }).map((val, key) => {
                      return (                    
                      <tbody>
                      <tr>
                      <td><span class="data-prefix-xs xs-prefix-vertical">LAST NAME:</span>{val.last_name}</td>
                      <td><span class="data-prefix-xs xs-prefix-vertical">FIRST NAME:</span>{val.first_name}</td>
                      <td><span class="data-prefix-xs xs-prefix-vertical">POLICY NUMBER</span>{val.insurance_number}</td>
                      <td><span class="data-prefix-xs xs-prefix-vertical">EMAIL ADDRESS</span>{val.email}</td>
                      <td><span class="data-prefix-xs xs-prefix-vertical">ACCIDENT ADDRESS</span>{val.address}</td>
                      <td><span class="data-prefix-xs xs-prefix-vertical">ACCIDENT REPORT</span>{val.report}
                      </td>
                      </tr>
                      </tbody>
                    );
                  }
                  )}
                  </table>
                </div>
           </div>
         </div>        
   );  
}           
export default SearchClaim;
