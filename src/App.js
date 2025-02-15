import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import SelectAddress from './SelectAddress';
import ProductPage from './ProductPage';
import { CartProvider } from './CartContext';
import Account from './Account'
import OrderHistory from './OrderHistory';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/select-address">
              <SelectAddress />
            </Route>
            <Route path="/product/:productName">
              <ProductPage />
            </Route>
            <Route path="/account">
              <Account />
            </Route>
            <Route path="/returns">
             <OrderHistory/>
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
