import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import imagen1 from "./assets/small02.avif";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

const initialProducts = [
  { id: 1, name: "Producto 1", price: 100, image: imagen1 },
  { id: 3, name: "Producto 2", price: 300, image: imagen1 },
  { id: 3, name: "Producto 3", price: 300, image: imagen1 },
  { id: 1, name: "Producto 4", price: 100, image: imagen1 },
  { id: 2, name: "Producto 5", price: 200, image: imagen1 },
  { id: 3, name: "Producto 6", price: 300, image: imagen1 },
  { id: 1, name: "Producto 7", price: 100, image: imagen1 },
  { id: 2, name: "Producto 8", price: 200, image: imagen1 },
  { id: 3, name: "Producto 9", price: 300, image: imagen1 },
  { id: 1, name: "Producto 10", price: 100, image: imagen1 },
];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <div className='App'>
      <Header />
      <Products initialProducts={initialProducts} />
      <Cart cart={cart} />
      <Footer />
    </div>
  );
}

export default App;
