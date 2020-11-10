import React from "react";

export default function AdminProducts({
  products, 
  categories,
  handleNombre,
  handleFoto,
  handlePrecio,
  handleDescripcion,
  handleCategoria,
  handleSubmit,
  handleStock,
  handleTalle,
  handleColor,
  handleCantidad,
  handleProducto
}) {
  console.log("PRODUCSSSSS", products)
  return (
    <div>
      <h1>Products</h1>
        <form onSubmit={handleSubmit}>
            <input placeholder="nombre" onChange={handleNombre}></input>
            <input placeholder="precio" onChange={handlePrecio}></input>
            <input placeholder="foto" onChange={handleFoto}></input>
            <input placeholder="descripcion" onChange={handleDescripcion}></input>
            <select name="categorias" onChange={handleCategoria}>
              <option value="" selected></option>
                {categories && categories.map((category) =>(
                  <option value={category._id}>{category.nombre}</option>
                ))}
            </select>
            <button type="submit">Crear producto</button>
        </form>
        
        <form onSubmit={handleStock}>
            <input placeholder="talle" onChange={handleTalle}></input>
            <input placeholder="color" onChange={handleColor}></input>
            <input placeholder="cantidad" onChange={handleCantidad}></input>
            <select name="producto" onChange={handleProducto}>
              <option value="" selected></option>
                {products && products.map((product) =>(
                
                  <option value={product._id}>{product.nombre}</option>
                ))}
            </select>
            <button type="submit">Generar stock</button>
        </form>
    </div>
  );
}