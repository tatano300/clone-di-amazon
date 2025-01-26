import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  return (
    <Container>
      <Title>Il tuo carrello</Title>
      {cart.length === 0 ? (
        <EmptyMessage>Il carrello è vuoto.</EmptyMessage>
      ) : (
        cart.map((item) => (
          <CartItem key={item.title}>
            <Image src={item.image} alt={item.title} />
            <Details>
              <ProductTitle>{item.title}</ProductTitle>
              <ProductPrice>{item.price}</ProductPrice>
              <RemoveButton onClick={() => removeFromCart(item.title)}>
                Rimuovi
              </RemoveButton>
            </Details>
          </CartItem>
        ))
      )}
    </Container>
  );
}

export default Cart;


const Quantity = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;



const Container = styled.div`
  padding: 20px;
`;

const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
`;

const EmptyMessage = styled.p`
  font-size: 18px;
  color: #555;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 20px;
`;

const Details = styled.div`
  flex: 1;
`;

const ProductTitle = styled.h3`
  font-size: 18px;
  margin: 0;
`;

const ProductPrice = styled.p`
  font-size: 16px;
  color: #e07a00;
  margin: 5px 0;
`;

const RemoveButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  background-color: #e07a00;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #c06000;
  }
`;

