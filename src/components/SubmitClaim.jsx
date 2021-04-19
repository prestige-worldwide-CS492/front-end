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

import React, { useRef } from 'react'
import { Link, useHistory } from 'react-router-dom'

export default function SubmitClaim () {
  const policyNumber = useRef(null)
  const firstName = useRef(null)
  const lastName = useRef(null)
  const category = useRef(null)
  const description = useRef(null)
  const address = useRef(null)

  const history = useHistory()

  const submitHandler = event => {
    if (!event.isDefaultPrevented()) {
      const claim = {
        policy_number: policyNumber.current.value,
        first_name: firstName.current.value,
        last_name: lastName.current.value,
        category: category.current.value,
        description: description.current.value,
        address: address.current.value
      }

      fetch('http://localhost:8080/claims', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(claim)
      })
        .then(() => history.replace('/success'))
    }
  }

  return (
    <div className='container'>
      <ul className='breadcrumb'>
        <li><Link to='/'>Home</Link></li>
        <li className='active'>Submit Claim</li>
      </ul>

      <div className='card row top'>
        <form onSubmit={submitHandler} className='form-selectors' data-toggle='validator' data-disable='true' data-delay='999999'>
          <div className='row'>
            <div className='col-md-4 form-group has-feedback'>
              <label htmlFor='policy_number' className='control-label'>Policy Number</label>
              <input
                type='number'
                className='form-control'
                id='policy_number'
                placeholder='Enter policy number'
                name='policy_number'
                data-error='Please enter your policynumber.'
                ref={policyNumber}
                required
              />
              <span className='icon icon-attention form-control-feedback' aria-hidden='true' />
              <div className='help-block with-errors' />
            </div>

            <div className='col-md-4 form-group has-feedback'>
              <label htmlFor='first-name' className='control-label'>First Name</label>
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

            <div className='col-md-4 form-group has-feedback'>
              <label htmlFor='last_name' className='control-label'>Last Name</label>
              <input
                type='text'
                className='form-control'
                id='last_name'
                placeholder='Enter last Name'
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
            <div className='mt-3 col-md-6 form-group has-feedback'>
              <label htmlFor='category' className='control-label'>Choose a category</label>
              <select className='form-control' name='category' id='category' ref={category} required>
                <option value='Auto liability coverage'>Auto Liability Coverage</option>
                <option value='Uninsured Motorist Coverage'>Uninsured Motorist Coverage</option>
                <option value='Comprehensive Coverage'>Comprehensive Coverage</option>
                <option value='Collision Coverage'>Collision Coverage</option>
                <option value='Medical Payments Coverage'>Medical payments Coverage</option>
                <option value='Personal Injury Protection'>Personal Injury Protection</option>
              </select>
            </div>

            <div className='mt-3 col-md-6 form-group has-feedback'>
              <label htmlFor='full-address' className='control-label'>Address</label>
              <input
                type='text'
                className='form-control'
                ref={address}
                required
              />
              <span className='icon icon-attention form-control-feedback' aria-hidden='true' />
              <div className='help-block with-errors' />
            </div>
          </div>

          <div className='mt-3 form-group'>
            <label htmlFor='description'>Description</label>
            <textarea
              className='form-control'
              type='text'
              name='description'
              id='description'
              rows='4'
              ref={description}
              required
            />
            <span className='icon icon-attention form-control-feedback' aria-hidden='true' />
            <div className='help-block with-errors' />
          </div>

          <input type='submit' value='Submit' className='btn btn-secondary' />
        </form>
      </div>
    </div>
  )
}
