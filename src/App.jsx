import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Components/Homepage/HomePage.jsx';
import CartPage from './Components/CartPage/CartPage.jsx';
import './App.css';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Failed to fetch products", error));
  }, []);

  const addToCart = (product) => {
    setCartItems((prevItems) => {
        const itemExists = prevItems.find((item) => item.id === product.id);
        if (itemExists) {
            return prevItems.map((item) => 
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
        }
        return [...prevItems, {...product, quantity: 1}];
    });
  };
  
  const removeFromCart = (productId) => {
    setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCartItems((prevItems) => {
      if (quantity < 1) {
        return prevItems.filter((item) => item.id !== productId);
      } else {
        return prevItems.map((item) => 
        item.id === productId ? {...item, quantity: Number(quantity) } : item
        );
      }
    });
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage products={products} cartItems={cartItems} addToCart={addToCart} />} />
        <Route path="/cart" element={<CartPage cartItems={cartItems} removeFromCart={removeFromCart} updateQuantity={updateQuantity}/>} />
      </Routes>
    </Router>
  );
}

export default App;
