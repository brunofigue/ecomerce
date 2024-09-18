import { useState } from "react";
import "./App.css";
import Cart from "./components/Cart";
import initialProducts from "./data/products";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Products from "./components/Products/Products";

function App() {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);

 
  } 
  return (
    <div className="App">
      <Header />
      <Products initialProducts={initialProducts} addToCart={addToCart}/>
      <Cart cart={cart} />
      <Footer />
    </div>
  );
}

export default App;
