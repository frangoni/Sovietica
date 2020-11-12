import { GET_REVIEW } from "../constants";

const initialState = {
  reviews: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_REVIEW:
      return { ...state, reviews: action.payload };
    default:
      return state;
  }
};
