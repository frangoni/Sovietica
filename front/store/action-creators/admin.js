import {SEARCH_USERS} from "../constants";
import axios from "axios";

const searchUsers = (users) => ({
  type: SEARCH_USERS,
  users,
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