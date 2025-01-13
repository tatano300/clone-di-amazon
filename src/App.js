import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Cart from './Cart';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"
import { CartProvider } from './CartContext';

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
