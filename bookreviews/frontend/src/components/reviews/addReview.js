import React, { Component } from "react";
import { connect } from "react-redux";

import PropTypes from "prop-types";
import { addReview } from "../../actions/reviews";

class AddReview extends Component {
  state = {
    author: "",
    title: "",
    review: ""
  };

  static propTypes = {
    addReview: PropTypes.func.isRequired
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log("form submitted", this.state);
    const { author, title, review } = this.state;
    const reviewData = { author, title, review };
    this.props.addReview(reviewData);
  };

  render() {
    const { author, title, review } = this.state;
    return (
      <div className="card card-body mt-4 mb-4">
        <h3>Add Review</h3>

        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input
              type="text"
              className="form-control"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Author</label>
            <input
              type="text"
              className="form-control"
              name="author"
              value={author}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label>Your Review</label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="10"
              name="review"
              value={review}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-primary btn-block">
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addReview }
)(AddReview);
