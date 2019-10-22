import React, { Component } from "react";
import { Link } from "react-router-dom";

export class SignIn extends Component {
  state = {
    username: "",
    email: "",
    passwordOne: "",
    passwordTwo: ""
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
    const { username, email, passwordOne, passwordTwo } = this.state;
    return (
      <div className="col-md-6 m-auto">
        <div className="card card-body mt-5">
          <h2 className="text-center">Sign In</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
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
              <label>Password</label>
              <input
                type="password"
                name="passwordOne"
                className="form-control"
                value={passwordOne}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="passwordTwo"
                className="form-control"
                value={passwordTwo}
                onChange={this.handleChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Submit
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
