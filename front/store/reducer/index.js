import {combineReducers} from "redux"
import userReducer from './userReducer';
import productsReducer from './productsReducer'
import cartReducer from './cart';
import adminReducer from './adminReducer'

export default combineReducers ({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  admin: adminReducer
})
