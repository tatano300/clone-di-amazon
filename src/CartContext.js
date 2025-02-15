import React, { createContext, useState } from "react";

// Crea il contesto
const CartContext = createContext();

// Crea il provider
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]); // Stato per gli ordini
  const [address, setAddress] = useState(""); // Stato per l'indirizzo

  // Aggiunge un prodotto al carrello, incrementa la quantità se esiste già
  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.title === product.title);
      if (existingProduct) {
        // Incrementa la quantità
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Aggiunge un nuovo prodotto con quantità 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  // Rimuove un prodotto dal carrello o decrementa la quantità
  const removeFromCart = (productId) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.title === productId);
      if (existingProduct && existingProduct.quantity > 1) {
        // Decrementa la quantità
        return prevCart.map((item) =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
      // Rimuove completamente il prodotto se la quantità è 1
      return prevCart.filter((item) => item.title !== productId);
    });
  };

// Funzione per acquistare un prodotto
const purchaseItem = (productTitle) => {
  setCart((prevCart) => {
    const productToPurchase = prevCart.find((item) => item.title === productTitle);
    if (productToPurchase) {
      setOrders((prevOrders) => [...prevOrders, productToPurchase]);
      return prevCart.filter((item) => item.title !== productTitle);
    }
    return prevCart;
  });
};

return (
  <CartContext.Provider
    value={{ cart, addToCart, removeFromCart, purchaseItem, orders, address, setAddress }}
  >
    {children}
  </CartContext.Provider>
);
};

export { CartContext };
