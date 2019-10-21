import axios from "axios";

import { GET_REVIEWS, DELETE_REVIEWS, ADD_REVIEW } from "./types";

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
    .catch(console.log);
};

// ADD REVIEW
export const addReview = review => dispatch => {
  axios
    .post("/api/reviews/", review)
    .then(response => {
      dispatch({
        type: ADD_REVIEW,
        payload: response.data
      });
    })
    .catch(console.log);
};

// DELETE REVIEWS
export const deleteReviews = id => dispatch => {
  axios
    .delete(`/api/reviews/${id}/`)
    .then(response => {
      dispatch({
        type: DELETE_REVIEWS,
        payload: id
      });
    })
    .catch(console.log);
};
