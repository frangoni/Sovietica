import { GET_ORDER, UPDATE_ORDERS } from "../constants";

const initialState = {
  orders: [],
  
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDER:
      return { ...state, orders: action.payload };
      case UPDATE_ORDERS:
        return { ...state, orders: action.order };  
    default:
      return state;
  }
};

