import {
  SET_PRODUCTS,
  FETCH_PRODUCT,
  FETCH_STOCK,
  FETCH_REVIEWS,
} from "../constants";

const initialState = {
  products: [],
  product: [],
  reviews: [],
  stock: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return { ...state, products: action.products };
    case FETCH_PRODUCT:
      return { ...state, product: action.payload };
    case FETCH_REVIEWS:
      return { ...state, reviews: action.payload };
    case FETCH_STOCK:
      return { ...state, stock: action.payload };
    default:
      return state;
  }
};
