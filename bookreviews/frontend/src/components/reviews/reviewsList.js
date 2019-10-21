import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getReviews, deleteReviews } from "../../actions/reviews";

export class ReviewsList extends Component {
  static propTypes = {
    reviews: PropTypes.array.isRequired,
    getReviews: PropTypes.func.isRequired,
    deleteReviews: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.getReviews();
  }
  render() {
    return (
      <Fragment>
        <h2>Book Reviews</h2>
        <table className="table table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Author</th>
              <th>Title</th>
              <th>Review</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {this.props.reviews.map(review => (
              <tr key={review.id}>
                <td>{review.id}</td>
                <td>{review.author}</td>
                <td>{review.title}</td>
                <td>{review.review}</td>
                <td>{review.created_at}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={this.props.deleteReviews.bind(this, review.id)}
                  >
                    Delete Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  reviews: state.reviews.reviews
});

export default connect(
  mapStateToProps,
  { getReviews, deleteReviews }
)(ReviewsList);
