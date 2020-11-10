import { SEARCH_USERS , SET_PRODUCTS} from "../constants";

const initialState = {
  users: [],
  products : [],
  categories : []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return { ...state, users: action.users };
    case SET_PRODUCTS:
        return { ...state, products: action.products };
    case "GET_CATEGORY":
        return { ...state, categories: action.category };
    default:
      return state;
  }
};
