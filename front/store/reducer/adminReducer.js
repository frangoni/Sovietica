import { SEARCH_USERS, SET_PRODUCTS } from "../constants";

const initialState = {
  users: [],
  products: [],
  categories: [],
  stock: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.users };
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case "GET_CATEGORY":
      return { ...state, categories: action.category };
    case "GET_STOCK":
      return { ...state, stock: action.stock };
    default:
      return state;
  }
};
