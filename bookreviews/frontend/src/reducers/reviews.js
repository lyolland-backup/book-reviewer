import { GET_REVIEWS, DELETE_REVIEWS, ADD_REVIEW } from "../actions/types.js";

const initialState = {
  reviews: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_REVIEWS:
      return {
        ...state,
        reviews: action.payload
      };
    case DELETE_REVIEWS:
      return {
        ...state,
        reviews: state.reviews.filter(review => review.id != action.payload) // id is being sent as action.payload
      };
      case ADD_REVIEW:
        return {
          ...state,
          reviews: [...state.reviews, action.payload]
        }
    default:
      return state;
  }
}
