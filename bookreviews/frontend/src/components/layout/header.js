import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#">
            Book Reviewer
            <span role="img" aria-label="book reviewer">
              📖
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-item nav-link active" to="/">
                Home
              </Link>

              <Link className="nav-item nav-link active" to="/signin">
                Sign In
              </Link>
              <Link className="nav-item nav-link active" to="/register">
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Header;
