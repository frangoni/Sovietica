import {combineReducers} from "redux"
import userReducer from './userReducer';
import productsReducer from './productsReducer'
import cartReducer from './cart';
import categoriesReducer from './categoriesReducer'

export default combineReducers ({
  user: userReducer,
  products: productsReducer,
  cart: cartReducer,
  categories: categoriesReducer
})
