import React, { useState } from 'react';
import { Link } from 'react-router-dom';


function Claim(props) {
  const [data, setData] = useState({})

  fetch(`http://localhost:8080/claims/${props.match.params.claimID}`)
    .then(res => res.json())
    .then(res => setData(res))

  return <div className="container">
    <ul className="breadcrumb">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/SearchClaim">Claims</Link></li>
      <li className="active">{props.match.params.claimID ?? '00000000-0000-0000-0000-000000000000'}</li>
    </ul>

    <div className="card row top">
      <h3>CLAIM {props.match.params.claimID ?? '00000000-0000-0000-0000-000000000000'}</h3>
      <h6 className="green">Submitted on {data.date ?? '3.28.2021'}</h6>
    </div>

    <div className="card row">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <h6>Insurance Holder</h6>
            <h2 style={{ marginBottom: '8px' }}>{`${data.firstName ?? 'Joe'} ${data.lastName ?? 'Smith'}`}</h2>
            <h5>{data.policyNumber ?? '0-000-000-0000'}</h5>
          </div>
          
          <div className="col-md-4">
            <h6>Category of Claim</h6>
            <h2>{data.category ?? 'vehicle collision'}</h2>
          </div>
          
          <div className="col-md-4">
            <h6>Status</h6>
            <h2 className="green">{props.status ?? 'Resolved'}</h2>
          </div>
        </div>
      </div>
    </div>

    <div className="card row">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-4">
            <img className="img-responsive" src={`http://localhost:8080/claims/map/${props.match.params.claimID}`} />

            <h6 style={{ marginTop: '40px' }}>Date</h6>
            <h2>{data.date ?? '3.27.2021'}</h2>

            <h6 style={{ marginTop: '40px' }}>Location</h6>
            <h2>{data.address ?? '357 Brittany Farms Rd'}</h2>
          </div>

          <div className="col-md-8">
            <h2>Description</h2>
            <p>{data.description ?? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus varius vehicula nisi ac ultrices. Integer non bibendum est. Proin ut risus interdum, commodo ex nec, mollis metus. Maecenas cursus neque eu justo luctus, mollis consequat nulla eleifend. Vivamus posuere consequat sem sit amet bibendum. Donec accumsan facilisis urna nec congue. Donec interdum consequat suscipit. Proin purus risus, convallis at hendrerit vel, pharetra in quam. Mauris rhoncus laoreet imperdiet. Morbi volutpat elit aliquet tempus pharetra. Morbi maximus, leo eu gravida consequat, eros nisl feugiat lorem, sit amet scelerisque metus ipsum at quam.'}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
}


export default Claim;