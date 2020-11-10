import {SEARCH_USERS , SET_PRODUCTS } from "../constants";
import axios from "axios";

const searchUsers = (users) => ({
  type: SEARCH_USERS,
  users,
})

const receieveProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

const receieveCategories = (category) => ({
  type : "GET_CATEGORY",
  category
})

export const fetchUsers = ()=>(dispatch)=>{
    axios.get("/api/admin/users")
    .then(res => res.data)
    .then(users=> dispatch(searchUsers(users)))
  }

export const updateUsers = (id,rol)=>(dispatch)=>{
    axios.put(`/api/admin/users/${id}`,{rol:rol})
    .then(res => res.data)
    .then(users=> dispatch(searchUsers(users)))
}

export const deleteUsers = (id)=>(dispatch)=>{
  axios.delete(`/api/admin/users/${id}`)
  .then(res => res.data)
  .then(users=> dispatch(searchUsers(users)))
}

// PRODUCTOS
export const fetchProducts = () => (dispatch) => {
  axios
    .get('/api/admin/products')
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receieveProducts(producto));
    });
};
//create

export const createProducts = (data) => (dispatch) => {
  axios.post("/api/admin/products" , data)
    .then(res => res.data)
    .then(product => dispatch(receieveProducts(product)))
}
//delete
//edit



//CATEGORIAS
export const fetchCategories = () => (dispatch) => {
  axios
    .get('/api/categories')
    .then((res) => res.data)
    .then((category) => {
      dispatch(receieveCategories(category));
    });
};


//CREAR STOCK

export const createStock = (data) => (dispatch) => {
  axios.post("/api/admin/stock" , data)
    .then(res => res.data)
};

export const fetchStock = () => (dispatch) => {
  axios
    .get('/api/admin/stock')
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receieveProducts(producto));
    });
};