// Header.js
import React, { useState, useContext } from 'react'; 
import styled from 'styled-components';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import logo from './image/amazon-logo.png'; 
import { Link } from 'react-router-dom';
import { CartContext } from './CartContext';

function Header() {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { address, cart, addToCart } = useContext(CartContext);

  // Dati dei prodotti (uguali a quelli usati in Home.js)
  const products = [
    {
      title: "Cuffie Bluetooth",
      description: "Cuffie wireless con audio stereo",
      price: "€49.99",
      image: "https://primopromo.it/1341789-large_default/cuffie-bluetooth-in-plastica-riciclata-loop.jpg"
    },
    {
      title: "Smartwatch",
      description: "Orologio intelligente con monitoraggio attività",
      price: "€89.99",
      image: "https://cdn.sectornolimits.com/i/huge/72278/sector-smartwatch-s03-r3251282002_v1n21a.jpg"
    },
    {
      title: "Zaino Casual",
      description: "Zaino resistente per laptop e viaggio",
      price: "€60.00",
      image: "https://www.trippodo.com/856935-large_default/wenger-swissgear-mx-eco-light-zaino-zaino-casual-grigio-plastica-riciclata.jpg"
    },
    {
      title: "Tastiera Meccanica",
      description: "Tastiera RGB con switch silenziosi",
      price: "€80.00",
      image: "https://breunor.com/cdn/shop/files/1_ae0f39c7-f423-411d-b25a-823291908736.jpg?v=1717667367"
    },
    {
      title: "Lampada LED",
      description: "Lampada smart con controllo vocale",
      price: "€40.00",
      image: "https://www.ledleditalia.it/wp-content/uploads/2023/02/lampadina-led-e27-a-tubo-a-spirale-20w-bianco-caldo-3000k-aigostar.jpg"
    },
    {
      title: "Mouse Gaming",
      description: "Mouse gaming ad alta precisione",
      price: "€100.00",
      image: "https://www.pcfrog.it/wp-content/uploads/2024/04/MOUS87520-20000206691.webp"
    },
    {
      title: "Playstation 5",
      description: "Console di ultima generazione",
      price: "€200.00",
      image: "https://media.direct.playstation.com/is/image/psdglobal/PS5-Slim-Hero-4"
    },
    {
      title: "Joystick Wireless Xbox",
      description: "Joystick wireless verde",
      price: "€20.00",
      image: "https://www.e-stayon.com/images/thumbs/0225838_microsoft-controller-wireless-per-xbox-velocity-green.jpeg.webp"
    }
  ];

  // Gestione della ricerca: filtra i prodotti in base al titolo
  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    if (term.trim() !== "") {
      const filtered = products.filter(product => 
        product.title.toLowerCase().includes(term.toLowerCase())
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

  // Seleziona il prodotto cliccato nel dropdown: imposta il titolo nell'input e nasconde il dropdown
  const handleSuggestionClick = (product) => {
    setSearchTerm(product.title);
    setFilteredProducts([]);
    // Qui puoi anche navigare verso la pagina del prodotto se lo desideri
  };

  // Gestore del pulsante "Aggiungi al carrello"
  const handleAddToCart = (product, e) => {
    // Impedisce che il click sul pulsante faccia scatenare anche il click sul suggerimento
    e.stopPropagation();
    if (addToCart) {
      addToCart(product);
    } else {
      console.log("Aggiungi al carrello:", product);
    }
  };

  return (
    <Container>
      <HeaderLogo>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
      </HeaderLogo>

      <Link to="/select-address" style={{ textDecoration: 'none', color: 'inherit' }}>
        <HeaderOptionAddress>
          <LocationOnIcon />
          <HeaderOption>
            <OptionLineOne>Invia a Gaetano</OptionLineOne>
            <OptionLineTwo>{address ? address : "Select your Address"}</OptionLineTwo>
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

        {/* Dropdown con suggerimenti: mostra l'immagine completa, il titolo e il pulsante "Aggiungi al carrello" */}
        {searchTerm && (
          <Suggestions>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <SuggestionItem key={index} onClick={() => handleSuggestionClick(product)}>
                  <ProductImage src={product.image} alt={product.title} />
                  <ProductName>{product.title}</ProductName>
                  <AddToCartButton onClick={(e) => handleAddToCart(product, e)}>
                    Aggiungi al carrello
                  </AddToCartButton>
                </SuggestionItem>
              ))
            ) : (
              <SuggestionItem>
                Nessun suggerimento trovato
              </SuggestionItem>
            )}
          </Suggestions>
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

// Styled Components

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
  overflow: visible; /* Consente al dropdown di espandersi oltre la barra */
  margin-left: 4px;
  background-color: white;
  position: relative;
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
  top: 100%; /* Appena sotto la barra di ricerca */
  left: 0;
  width: 100%;
  background-color: white;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 10;
`;

const SuggestionItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  font-size: 14px;
  border-bottom: 1px solid #eee;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f0f0;
  }
`;

const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain; /* Garantisce che l'intera immagine sia visibile */
  margin-right: 10px;
`;

const ProductName = styled.div`
  flex-grow: 1;
  color: black;
`;

const AddToCartButton = styled.button`
  background-color: #febd69;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  color: black;
  
  &:hover {
    background-color: #f90;
  }
`;

const HeaderNavItems = styled.div`
  display: flex;
`;

const HeaderOption = styled.div`
  padding: 10px 9px;
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
