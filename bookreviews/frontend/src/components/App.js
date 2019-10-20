import React, { Component, Fragment } from "react";
import ReactDom from "react-dom";
import Header from "./layout/Header";
import ReviewDashboard from "./reviews/reviewDashboard";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <ReviewDashboard />
        </div>
      </Fragment>
    );
  }
}

ReactDom.render(<App />, document.getElementById("app"));
