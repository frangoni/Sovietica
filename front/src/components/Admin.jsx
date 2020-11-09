import React from "react";

export default function Admin({ users, handleEdit, handleSubmit, deleteUsers }) {
  return (
    <div>
      <h1>admin</h1>
      {users.map((user) => (

          <ul>
            <li>{user.nombre}</li>
            <li>{user.email}</li>
            <li>{user.rol}</li>
            <select name="rol" onChange={handleEdit}>
              <option value="" selected></option>
              <option value="user">user</option>
              <option value="admin">admin</option>
            </select>
            <button onClick={()=> handleSubmit(user._id)}>Actualizar</button>
            <button onClick={()=> deleteUsers(user._id)}>Borrar Usuario</button>
          </ul>
          
        ))}

    </div>
  );
}
