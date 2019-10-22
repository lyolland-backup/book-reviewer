import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <h1 className="display-4 text-light">
          Book Reviewer{" "}
          <span role="img" aria-label="book">
            📖
          </span>
        </h1>
      </nav>
    );
  }
}

export default Header;
