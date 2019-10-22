import axios from "axios";

import { GET_REVIEWS, DELETE_REVIEWS, ADD_REVIEW, GET_ERRORS } from "./types";
import { createMessage, returnErrors } from "./messages";

// GET REVIEWS
export const getReviews = () => dispatch => {
  axios
    .get("/api/reviews/")
    .then(response => {
      dispatch({
        type: GET_REVIEWS,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// ADD REVIEW
export const addReview = review => dispatch => {
  axios
    .post("/api/reviews/", review)
    .then(response => {
      dispatch(createMessage({ addReview: "Review Added" }));
      dispatch({
        type: ADD_REVIEW,
        payload: response.data
      });
    })
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

// DELETE REVIEWS
export const deleteReviews = id => dispatch => {
  axios
    .delete(`/api/reviews/${id}/`)
    .then(response => {
      dispatch(createMessage({ deleteReview: "Review Deleted" }));
      dispatch({
        type: DELETE_REVIEWS,
        payload: id
      });
    })
    .catch(console.log);
};
