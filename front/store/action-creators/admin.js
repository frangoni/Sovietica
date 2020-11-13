import {SEARCH_USERS , SET_PRODUCTS } from "../constants";
import axios from "axios";


// BUSCA LOS USUARIOS
const searchUsers = (users) => ({
  type: SEARCH_USERS,
  users,
})

// BUSCA LOS PRODUCTOS
const receieveProducts = (products) => ({
  type: SET_PRODUCTS,
  products,
});

// BUSCA EL STOCK
const receieveStock = (stock) => ({
  type: "GET_STOCK",
  stock,
});

// BUSCA LAS CATEGORIAS
const receieveCategories = (category) => ({
  type : "GET_CATEGORY",
  category
})

// ---------- FETCHS DE USUARIOS -----------

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

// ---------- FETCHS DE PRODUCTOS-----------

// TRAE TODOS LOS PRODUCTOS
export const fetchProducts = () => (dispatch) => {
  axios
    .get('/api/admin/products')
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receieveProducts(producto));
    });
};

//CREAR PRODUCTOS
export const createProducts = (data) => () => {
  axios.post("/api/admin/products" , data)
    .then(res => res.data)
}

// EDITAR PRODUCTOS
export const updateProducts = (id,data)=>(dispatch)=>{
  axios.put(`/api/admin/products/${id}`,data)
  .then(res => res.data)
  .then(product=> dispatch(receieveProducts(product)))
}

// ELIMINAR PRODUCTOS
export const deleteProducts = (id)=>(dispatch)=>{
  axios.delete(`/api/admin/products/${id}`)
  .then(res => res.data)
  .then(product=> dispatch(receieveProducts(product)))
}

// ---------- FETCHS DE CATEGORIAS -----------

//CATEGORIAS
export const fetchCategories = () => (dispatch) => {
  axios
    .get('/api/categories')
    .then((res) => res.data)
    .then((category) => {
      dispatch(receieveCategories(category));
    });
};


// ---------- FETCHS DEL STOCK -----------

// BUSCA TODO EL STOCK
export const fetchStock = () => (dispatch) => {
  axios
    .get('/api/admin/stock')
    .then((res) => res.data)
    .then((producto) => {
      dispatch(receieveStock(producto));
    });
};

//CREAR STOCK
export const createStock = (data) => (dispatch) => {
  axios.post("/api/admin/stock" , data)
    .then(res => res.data)
};

// EDITAR STOCK
export const updateStock = (id,data)=>(dispatch)=>{
  console.log("aca esta data", data)
  axios.put(`/api/admin/stock/${id}`,data)
  .then(res => res.data)
  .then(stock=> dispatch(receieveStock(stock)))
}

// ELIMINAR STOCK
export const deleteStock = (id)=>(dispatch)=>{
  axios.delete(`/api/admin/stock/${id}`)
  .then(res => res.data)
  .then(stock=> dispatch(receieveStock(stock)))
}
