import { useState } from "react";

function Products({ initialProducts,addToCart }) {
  const [products] = useState(initialProducts);
 
  return (
    <>
      <h2>Lista de Productos</h2>
      <div className='product-list'>
        {products.map((product) => (
          <div key={product.id} className='product-item'>
            <img src={product.image} alt='' />
            <h2>{product.name}</h2>
            <p>Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Products;
