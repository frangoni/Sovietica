import { GET_ORDER } from "../constants";

const initialState = {
  orders: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, orders: action.payload };
    default:
      return state;
  }
};
