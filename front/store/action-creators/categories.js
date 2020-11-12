import axios from "axios";
import { GET_PRODUCTS_BY_CAT, FETCH_CATEGORIES, ADD_CATEGORIES } from "../constants";



const receiveCategories = (categories) => ({
  type: FETCH_CATEGORIES,
  categories,
});

/* const addCategory = (categories) => ({
  type: ADD_CATEGORIES,
  categories,
}); */

export const addCategory = (data) => (dispatch) =>  {
  console.log("llego al action ", data)
  axios
    .post('/api/categories', data)
    .then((res) => res.data)
    .then((category) => {
      dispatch(receiveCategories(category));
    });
};

export const deleteCategory = (idCategory) => {
  return (dispatch) => {
    axios
      .delete(`/api/categories/${idCategory}`)
      .then((category) => dispatch(receiveCategories(category.data)));
  };
};


export const fetchCategories = () => (dispatch) => {
  axios
    .get('/api/categories')
    .then((res) => res.data)
    .then((categories) => {

      dispatch(receiveCategories(categories));

    });
};
