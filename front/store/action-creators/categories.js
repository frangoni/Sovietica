import axios from "axios";
import { GET_PRODUCTS_BY_CAT, FETCH_CATEGORIES } from "../constants";



const receiveCategories = (categories) => ({
    type: FETCH_CATEGORIES,
    categories,
    
  });



export const fetchCategories = () => (dispatch) => {
    axios
      .get('/api/categories')
      .then((res) => res.data)
      .then((categories) => {
          
        dispatch(receiveCategories(categories));

      });
  };
