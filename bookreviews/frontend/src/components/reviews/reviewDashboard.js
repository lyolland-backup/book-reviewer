import React, { Fragment } from "react";
import AddReview from "./addReview";
import ReviewsList from "./reviewsList";

const ReviewDashboard = () => {
  return (
    <Fragment>
      <AddReview />
      <ReviewsList />
    </Fragment>
  );
};

export default ReviewDashboard;
