import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  state = {
    username: "",
    password: ""
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("submit sign in");
  };

  render() {
    const { username, password } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>username</label>
              <input
                type="text"
                className="form-control"
                name="username"
                value={username}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                value={password}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              submit
            </button>
          </form>
          <small>
            Need an account? <Link to="/register">Sign Up</Link>{" "}
          </small>
        </div>
      </div>
    );
  }
}

export default SignIn;
