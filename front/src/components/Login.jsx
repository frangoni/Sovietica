import React from "react";

import { Link } from "react-router-dom";

export default ({ handleEmail, handleSubmit, handleClave }) => (
  <div>
    <form onSubmit={handleSubmit}>
      <h1> Log In </h1>
      <h4>EMAIL </h4>
      <input
        type="email"
        placeholder="Ej: usuario@sovietica.com.ar"
        onChange={handleEmail}
      />

      <h4>CONTRASEÑA</h4>
      <input
        type="password"
        placeholder="Ingrese Contraseña"
        onChange={handleClave}
      />

      <button variant="primary" type="submit">
        INGRESAR
      </button>
    </form>

    <span> ¿No tenés cuenta? </span>
    <Link to="/register">
      <span> REGISTRATE ACÁ </span>
    </Link>
  </div>
);
