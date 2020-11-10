import { combineReducers } from "redux";
import userReducer from "./userReducer";
import productsReducer from "./productsReducer";
import cartReducer from "./cart";
import adminReducer from "./adminReducer";
import orderReducer from "./order";
import reviewReducer from "./review";

export default combineReducers({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  admin: adminReducer,
  order: orderReducer,
  review: reviewReducer,
});
