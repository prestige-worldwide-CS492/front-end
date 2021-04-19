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

import React, { useRef, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function ViewClaim () {
  const firstName = useRef(null)
  const lastName = useRef(null)
  const policyNumber = useRef(null)

  const [claims, setClaims] = useState([])

  const history = useHistory()

  const searchHandler = event => {
    if (!event.isDefaultPrevented()) {
      const searchParams = new URLSearchParams()

      if (lastName.current.value !== '') searchParams.set('lastName', lastName.current.value)
      if (firstName.current.value !== '') searchParams.set('firstName', firstName.current.value)
      if (policyNumber.current.value !== '') searchParams.set('policyNumber', policyNumber.current.value)

      fetch(`http://localhost:8080/claims?${searchParams.toString()}`)
        .then(res => res.json())
        .then(res => setClaims(res))
    }
  }

  return (
    <div className='container'>
      <ul className='breadcrumb'>
        <li><Link to='/'>Home</Link></li>
        <li className='active'>View Claim</li>
      </ul>

      <div className='card row top'>
        <form onSubmit={searchHandler} className='form-selectors' data-toggle='validator' data-disable='true' data-delay='999999'>
          <div className='row'>
            <div className='mt-4 form-group col-md-6'>
              <label htmlFor='first_name' className='control-label'>First Name</label>
              <input
                type='text'
                className='form-control'
                id='first_name'
                placeholder='Enter First Name'
                name='first_name'
                data-error='Please enter your first name.'
                ref={firstName}
                required
              />
              <span className='icon icon-attention form-control-feedback' aria-hidden='true' />
              <div className='help-block with-errors' />
            </div>

            <div className='mt-4 form-group col-md-6'>
              <label htmlFor='last_name' className='control-label'>Last Name</label>
              <input
                type='text'
                className='form-control'
                id='last_name'
                placeholder='Enter Last Name'
                name='last_name'
                data-error='Please enter your last name.'
                ref={lastName}
                required
              />
              <span className='icon icon-attention form-control-feedback' aria-hidden='true' />
              <div className='help-block with-errors' />
            </div>
          </div>

          <div className='row'>
            <div className='col-md-6 form-group'>
              <label htmlFor='policy-number'>Policy Number</label>
              <input
                type='number'
                className='form-control'
                id='policy-number'
                placeholder='Enter policy number'
                name='policyNumber'
                data-error='Please enter your policy number'
                ref={policyNumber}
                required
              />
              <span className='icon icon-attention form-control-feedback' aria-hidden='true' />
              <div className='help-block with-errors' />
            </div>
          </div>

          <input type='submit' value='View' className='btn btn-secondary' />
        </form>
      </div>

      {claims.length > 0 &&
        <div className='card row'>
          <table className='table table-striped'>
            <thead>
              <tr>
                <th scope='col' className='col-xs-2'>Last Name</th>
                <th scope='col' className='col-xs-2'>First Name</th>
                <th scope='col' className='col-xs-2'>Policy Number</th>
                <th scope='col' className='col-xs-2'>Address</th>
                <th scope='col' className='col-xs-10'>Description</th>
              </tr>
            </thead>

            <tbody>
              {claims.map((claim, i) => (
                <tr key={i} onClick={() => history.push(`/claim/${claim._id}`)}>
                  <td>{claim.lastName}</td>
                  <td>{claim.firstName}</td>
                  <td>{claim.policyNumber}</td>
                  <td>{claim.address}</td>
                  <td>{claim.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>}
    </div>
  )
}
