import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
export default function Register() {
  const userName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const history = useHistory();
  const searchHandler = (event) => {
    event.preventDefault();
    let form = document.getElementById("form_id");
    let isValidForm = form.checkValidity();

    if (isValidForm) {
      const user = {
        user_name: userName.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      fetch(`http://${window.location.hostname}:8080/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      })
        .then(() => (window.location.href = "/login"))
        .catch((error) => {
          console.log(error);
        });
    }
  };
  return (
    <div className="container">
      <div className="card row top">
        <h2 className="underlined">
          Register
          <br />
          <small style={{ color: "#3a5a78" }}>
            All information is required unless it’s listed as optional.
          </small>
        </h2>
        <form
          onSubmit={searchHandler}
          id="form_id"
          className="form-selectors"
          data-toggle="validator"
          data-disable="true"
          data-delay="999999"
        >
          <div className="row">
            <div className="mt-4 form-group col-md-6">
              <label htmlFor="user_name" className="control-label">
                User Name
              </label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                placeholder="Enter User Name"
                name="user_name"
                data-error="Please enter user name."
                ref={userName}
                required
              />
              <span
                className="icon icon-attention form-control-feedback"
                aria-hidden="true"
              />
              <div className="help-block with-errors" />
            </div>

            <div className="mt-4 form-group col-md-6">
              <label htmlFor="email" className="control-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter Email"
                name="email"
                data-error="Please enter your correct email."
                ref={email}
                required
              />
              <span
                className="icon icon-attention form-control-feedback"
                aria-hidden="true"
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter password"
                name="password"
                data-error="Please enter your password"
                ref={password}
                required
              />
              <span
                className="icon icon-attention form-control-feedback"
                aria-hidden="true"
              />
              <div className="help-block with-errors" />
            </div>
          </div>

          <input type="submit" value="Register" className="btn btn-secondary" />
        </form>
      </div>
    </div>
  );
}
