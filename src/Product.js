
import React from 'react'
import styled from 'styled-components';

function Product( {title, description, price, image}) {
    return (
        <Container>
            <Image src={image} alt="Product Image" />
            <Details>
                <Title>{title}</Title>
                <Description>{description}</Description>
                <Price>{price}</Price>
                <CTAButton>Scopri di Più</CTAButton>
            </Details>
        </Container>
    )
}

export default Product;

const Container = styled.div`
 background-color: white;
  z-index: 100;
  width: 300px;
  height: auto;
  border: 1px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column; /* Posiziona gli elementi uno sotto l'altro */
  align-items: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Aggiunge un'ombra leggera */
  gap: 15px; /* Spaziatura tra gli elementi */
`;
const Image = styled.img`
  max-width: 100%; /* L'immagine si adatta alla larghezza della card */
  height: auto;
  border-radius: 10px; /* Bordo arrotondato */
`;

const Details = styled.div`
  text-align: center;
`;

const Title = styled.h2`
  font-size: 18px;
  margin: 10px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: gray;
  margin: 10px 0;
`;

const Price = styled.h3`
  font-size: 20px;
  margin: 10px 0;
  color: #e07a00;
`;

const CTAButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: black;
  border-radius: 20px;
  cursor: pointer;
  border: none;

  &:hover {
    background-color: #e07a00;
  }
`;