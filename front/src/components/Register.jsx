import React from "react";

export default ({
  handleName,
  handleLastName,
  handleEmail,
  handleAdress,
  handlePhone,
  handlePassword,
  handleSubmit,
  nombre,
  apellido,
  email,
  direccion,
  telefono,
  clave,
}) => (
  <div>
    <h1>Sign In</h1>
    <form action="" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nombre"
        onChange={handleName}
        value={nombre}
      />
      <input
        type="text"
        placeholder="Apellido"
        onChange={handleLastName}
        value={apellido}
      />
      <input
        type="email"
        placeholder="E-mail"
        onChange={handleEmail}
        value={email}
      />
      <input
        type="text"
        placeholder="Direccion"
        onChange={handleAdress}
        value={direccion}
      />
      <input
        type="text"
        placeholder="telefono"
        onChange={handlePhone}
        value={telefono}
      />
      <input
        type="password"
        placeholder="Clave"
        onChange={handlePassword}
        value={clave}
      />
      <button>Sign In</button>
    </form>
  </div>
);