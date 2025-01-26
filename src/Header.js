import React, { useState, useContext } from 'react'; 
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from './image/amazon-logo.png'; 
import { Link } from "react-router-dom";
import { CartContext } from './CartContext'; 


function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { address } = useContext(CartContext);
  const { cart } = useContext(CartContext); 

  const products = [
    "Cuffie Bluetooth",
    "Smartwatch",
    "Zaino Casual",
    "Tastiera Meccanica",
    "Lampada LED",
    "Mouse Gaming",
    "PlayStation 5",
    "Joystick Wireless Xbox"
  ];

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
  
    if (term.trim() !== "") {
      const filtered = products.filter((product) =>
        product.toLowerCase().includes(term.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      setFilteredProducts([]);
    }
  };

  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== "") {
      console.log("Esegui la ricerca per:", searchTerm);
    }
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} alt="Amazon Logo" />
        </Link>
      </HeaderLogo>

      {/* Cliccabile: "Hello, Select your Address" */}
      <Link to="/select-address" style={{ textDecoration: 'none', color: 'inherit' }}>
        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Invia a Gaetano</OptionLineOne>
            <OptionLineTwo> {address ? `${address}` : "Select your Address"}</OptionLineTwo>
          </HeaderOption>
        </HeaderOptionAddress>
      </Link>

      <HeaderSearch>
        <HeaderSearchInput
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder="Cerca prodotti, categorie..."
        />
        <HeaderSearchIconContainer onClick={handleSearchSubmit}>
          <SearchIcon />
        </HeaderSearchIconContainer>
        {filteredProducts.length > 0 ? (
          <div>
            {filteredProducts.map((product, index) => (
              <div key={index}>{product}</div>
            ))}
          </div>
        ) : (
          <div style={{ color: 'red' }}>Nessun suggerimento trovato</div>
        )}
      </HeaderSearch>

      <HeaderNavItems>
        <Link to="/account" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HeaderOption>
            <OptionLineOne>Hello, Gaetano</OptionLineOne>
            <OptionLineTwo>Account & Lists</OptionLineTwo>
          </HeaderOption>
        </Link>

        <Link to="/returns" style={{ textDecoration: 'none', color: 'inherit' }}>
          <HeaderOption>
            <OptionLineOne>Returns</OptionLineOne>
            <OptionLineTwo>& Orders</OptionLineTwo>
          </HeaderOption>
        </Link>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon />
            <CartCount>{cart.length}</CartCount>
          </Link>
        </HeaderOptionCart>
      </HeaderNavItems>
    </Container>
  );
}

export default Header;



// Styled components
const Container = styled.div`
  height: 60px;
  background-color: #0f1111;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
`;

const HeaderLogo = styled.div`
  img {
    width: 100px;
    margin-left: 11px;
  }
`;

const HeaderOptionAddress = styled.div`
  padding-left: 9px;
  display: flex;
  align-items: center;
  color: white;
`;

const OptionLineOne = styled.div`
  color: white;
`;

const OptionLineTwo = styled.div`
  color: white;
  font-weight: 700;
`;

const HeaderSearch = styled.div`
  display: flex;
  flex-grow: 1;
  height: 35px;
  border-radius: 4px;
  overflow: hidden;
  margin-left: 4px;
  background-color: white;
  position: relative; /* Necessario per posizionare i suggerimenti */
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 2px solid transparent;
  padding-left: 10px;
  height: 100%;
  font-size: 14px;

  :focus {
    outline: none;
    border: 2px solid #f90 !important;
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Suggestions = styled.div`
  position: absolute;
  top: 100%; /* Mostra i suggerimenti sotto la barra di ricerca */
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SuggestionItem = styled.div`
  padding: 10px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  padding: 10px 9px 10px 9px;
`;

const HeaderOptionCart = styled.div`
  display: flex;
  a {
    display: flex;
    align-items: center;
    padding-right: 9px;
    color: white;
    text-decoration: none;
  }
`;

const CartCount = styled.div`
  color: white; 
  font-weight: 700;
  margin-left: 5px;
`;
