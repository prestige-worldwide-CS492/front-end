import React, { Component } from "react";

class SubmitClaim extends Component {
  state = {};

  handleSubmit(event) {
    event.preventDefault();
    console.log(event);
    const data = new FormData(event.target);
    data.set("policyNumber", data.get("policyNumber"));
    console.log(data);
  }

  render() {
    return (
      <div className="container p-3">
        <form onSubmit={this.handleSubmit} method="POST">
          <div className="row">
            <div className="col">
              <label htmlFor="policy-number">Policy Number</label>
              <input
                type="number"
                className="form-control"
                id="policy-number"
                placeholder="Enter policy number"
                name="policyNumber"
              ></input>
            </div>
            <div className="col">
              <label htmlFor="first-name">First Name</label>
              <input
                type="text"
                className="form-control"
                id="first-name"
                placeholder="Enter First Name"
                name="firstName"
              ></input>
            </div>

            <div className="col">
              <label htmlFor="last-name">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="last-name"
                placeholder="Enter last Name"
                name="lastName"
              ></input>
            </div>
          </div>
          <div className="mt-3">
            <label htmlFor="category">Choose a category</label>
            <select className="form-control" name="category" id="category">
              <option value="option1">option 1</option>
              <option value="option2">option 2</option>
              <option value="option3">option 3</option>
              <option value="option4">option 4</option>
              <option value="option5">option 5</option>
            </select>
          </div>

          <div className="mt-3">
            <label htmlFor="description">Description</label>
            <textarea
              className="form-control"
              type="text"
              name="description"
              id="description"
              rows="4"
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SubmitClaim;
