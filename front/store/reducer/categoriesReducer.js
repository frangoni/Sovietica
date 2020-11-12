import {FETCH_CATEGORIES, GET_PRODUCTS_BY_CAT } from "../constants";
  
  const initialState = {
    productsByCat: [],
    categories: []
  };
  
  export default (state = initialState, action) => {
    switch (action.type) {
      case GET_PRODUCTS_BY_CAT :
        return { ...state, productsByCat: action.products };
        case FETCH_CATEGORIES :
        return { ...state, categories: action.categories};
      default:
        return state;
    }
  };