import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cart";
import adminReducer from "./adminReducer";
import orderReducer from "./order";
import reviewReducer from "./review";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  admin: adminReducer,
  order: orderReducer,
  review: reviewReducer,
  categories: categoriesReducer,
});
