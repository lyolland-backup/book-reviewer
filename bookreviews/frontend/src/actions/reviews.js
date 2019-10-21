import axios from "axios";

import { GET_REVIEWS, DELETE_REVIEWS } from "./types";

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
