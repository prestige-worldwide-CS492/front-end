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

import React from 'react'
import { Link } from 'react-router-dom'

export default function Success () {
  return (
    <div className='container'>
      <ul className='breadcrumb'>
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/submit-claim'>Submit Claim</Link></li>
        <li className='active'>Success</li>
      </ul>

      <div className='card row top'>
        <h1>Success</h1>
        <h6>Claim submitted without error</h6>
      </div>
    </div>
  )
}
