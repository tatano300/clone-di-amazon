import React, { createContext, useState } from 'react';

// Crea il contesto
const CartContext = createContext();

// Crea il provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, { ...product, id: Date.now() }]); // Assegna ID unico
  };

  // Funzione per rimuovere un prodotto dal carrello
  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(product => product.id !== productId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartContext };
