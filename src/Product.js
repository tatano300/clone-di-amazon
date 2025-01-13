import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

function Product({ title, description, price, image }) {
  const { addToCart } = useContext(CartContext); // Accedi alla funzione addToCart dal contesto

  const handleAddToCart = () => {
    addToCart({ title, description, price, image });
  };

  return (
    <Container>
      <Image src={image} alt={title} />
      <Details>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Price>{price}</Price>
        <CTAButton onClick={handleAddToCart}>Aggiungi al carrello</CTAButton>
      </Details>
    </Container>
  );
}

export default Product;

const Container = styled.div`
  background-color: white;
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  max-width: 300px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  border-radius: 5px;
`;

const Details = styled.div`
  margin-top: 10px;
`;

const Title = styled.h3`
  font-size: 18px;
`;

const Description = styled.p`
  font-size: 14px;
  color: #555;
`;

const Price = styled.p`
  font-size: 16px;
  color: #e07a00;
  margin: 5px 0;
`;

const CTAButton = styled.button`
  padding: 10px;
  font-size: 14px;
  color: white;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;
