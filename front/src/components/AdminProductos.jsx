import React from "react"

export default function AdminProductos({ products }) {
  console.log("ACAAAA" , products)
  return (
    <div>
      <h1>Listado de productos</h1>
        {products && products.map((product) => (
            <>
              <ul>
                {/* <li>{product.productos[0].nombre}</li>
                <li>{product.productos[0].foto}</li>   */}
                <li>{product.talle}</li>
                <li>{product.color}</li>
                <li>{product.cantidad}</li>
              {/*   <li>{product.productos[0].descripcion}</li>  */}
              </ul>
              <hr></hr>
            </>
        ))}  
    </div>
  );
}