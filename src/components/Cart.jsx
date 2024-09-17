function Cart({ cart }) {
  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  const handleCheckout = () => {
    alert(`¡Compra realizada! Total: $${getTotalPrice()}`);
    // Aquí podrías hacer una llamada a una API para procesar el pago.
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.name} - ${item.price}
          </li>
        ))}
      </ul>
      <h3>Total: ${getTotalPrice()}</h3>
      <button onClick={handleCheckout} disabled={cart.length === 0}>
        Comprar
      </button>
    </div>
  );
}

export default Cart;
