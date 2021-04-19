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

import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Claim ({ match }) {
  const [claim, setClaim] = useState({})

  useEffect(() => {
    fetch(`http://localhost:8080/claims/${match.params.claimID}`)
      .then(res => res.json())
      .then(res => setClaim(res))
  }, [match.params.claimID])

  return (
    <div className='container'>
      <ul className='breadcrumb'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/search-claim'>Claims</Link></li>
        <li className='active'>{match.params.claimID.toUpperCase()}</li>
      </ul>

      <div className='card row top'>
        <h3>CLAIM {match.params.claimID.toUpperCase()}</h3>
        <h6 className='green'>Submitted on {claim.date ?? 'Loading...'}</h6>
      </div>

      <div className='card row'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <h6>Insurance Holder</h6>
              <h2>{claim.lastName ? `${claim.firstName} ${claim.lastName}` : 'Loading...'}</h2>
              <h5>{claim.policyNumber ?? 'Loading...'}</h5>
            </div>

            <div className='col-md-4'>
              <h6>Category of Claim</h6>
              <h2>{claim.category ?? 'Loading...'}</h2>
            </div>

            <div className='col-md-4'>
              <h6>Status</h6>
              <h2 className='green'>{claim.status ?? 'Loading...'}</h2>
            </div>
          </div>
        </div>
      </div>

      <div className='card row'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-md-4'>
              <img className='img-responsive' alt='map' src={`http://localhost:8080/claims/map/${match.params.claimID}`} />

              <h6>Location</h6>
              <h2>{claim.address ?? 'Loading...'}</h2>

              <h6>Date</h6>
              <h2>{claim.date ?? 'Loading...'}</h2>
            </div>

            <div className='col-md-8'>
              <h2>Description</h2>
              <p>{claim.description ?? 'Loading...'}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
