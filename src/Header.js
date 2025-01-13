import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from './image/amazon-logo.png'; 
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function Header() {
  // Stato per la ricerca
  const [searchTerm, setSearchTerm] = useState("");

  // Funzione per gestire l'input della barra di ricerca
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  // Funzione per eseguire la ricerca (al click sull'icona o al pressare "Enter")
  const handleSearchSubmit = () => {
    if (searchTerm.trim() !== "") {
      console.log("Esegui la ricerca per:", searchTerm);
      // Puoi aggiungere la logica per indirizzare la ricerca a una nuova pagina
    }
  };

  // Funzione per gestire l'invio quando si preme "Enter"
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit();
    }
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} alt="Amazon Logo"/>
        </Link>
      </HeaderLogo>

      <HeaderOptionAddress>
        <LocationOnIcon/>
        <HeaderOption>
          <OptionLineOne>Hello</OptionLineOne>
          <OptionLineTwo>Select your Address</OptionLineTwo>
        </HeaderOption>
      </HeaderOptionAddress>

      <HeaderSearch>
        <HeaderSearchInput 
          type="text"
          value={searchTerm} 
          onChange={handleSearchChange} 
          onKeyPress={handleKeyPress} // Aggiungi gestione pressione "Enter"
          placeholder="Cerca prodotti, categorie..." 
        />
        <HeaderSearchIconContainer onClick={handleSearchSubmit}>
          <SearchIcon />
        </HeaderSearchIconContainer>
      </HeaderSearch>

      <HeaderNavItems>
        <HeaderOption>
          <OptionLineOne>Hello, Nazarli</OptionLineOne>
          <OptionLineTwo>Account & Lists</OptionLineTwo>
        </HeaderOption>

        <HeaderOption>
          <OptionLineOne>Returns</OptionLineOne>
          <OptionLineTwo>& Orders</OptionLineTwo>  
        </HeaderOption>

        <HeaderOptionCart>
          <Link to="/cart">
            <ShoppingBasketIcon/>
            <CartCount>4</CartCount>
          </Link>
        </HeaderOptionCart> 
      </HeaderNavItems>
    </Container>
  );
}

export default Header;

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
`;

const HeaderSearchInput = styled.input`
  flex-grow: 1;
  border: 2px solid transparent; /* Bordo trasparente di default */
  padding-left: 10px;
  height: 100%;
  font-size: 14px;

  /* Quando l'input ha il focus, cambia il bordo */
  :focus {
    outline: none; /* Rimuovi il bordo blu predefinito */
    border: 2px solid #f90 !important; /* Imposta il bordo arancione */
  }
`;

const HeaderSearchIconContainer = styled.div`
  background-color: #febd69;
  width: 40px;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer; /* Cambia il cursore quando l'utente ci passa sopra */
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
