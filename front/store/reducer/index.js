import {combineReducers} from "redux"
import productsReducer from "./productsReducer"
import userReducer from './userReducer';
import cartReducer from './cart';

export default combineReducers({
    products: productsReducer,
    cart: cartReducer,
    user: userReducer
  
})
