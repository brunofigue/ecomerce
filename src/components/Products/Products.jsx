import { useState } from "react";

function Products({ initialProducts }) {
  const [products] = useState(initialProducts);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };
  return (
    <>
      <h1>Lista de Productos</h1>
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
