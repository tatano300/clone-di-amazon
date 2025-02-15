import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

function Cart() {
  const { cart, addToCart, removeFromCart, purchaseItem } = useContext(CartContext);

  // Calcola il totale dell'ordine
  const totalPrice = cart.reduce((total, item) => total + item.quantity * parseFloat(item.price.replace("€", "")), 0);

  return (
    <Container>
      <Title>Il tuo carrello</Title>
      {cart.length === 0 ? (
        <EmptyMessage>Il carrello è vuoto.</EmptyMessage>
      ) : (
        <>
          <OrderList>
            {cart.map((item) => (
              <CartItem key={item.title}>
                <Image src={item.image} alt={item.title} />
                <Details>
                  <ProductTitle>{item.title}</ProductTitle>
                  <ProductPrice>{item.price}</ProductPrice>
                  <Quantity>Quantità: {item.quantity}</Quantity>
                  <ButtonContainer>
                    <AdjustButton onClick={() => removeFromCart(item.title)}>-</AdjustButton>
                    <AdjustButton onClick={() => addToCart(item)}>+</AdjustButton>
                    <PurchaseButton onClick={() => purchaseItem(item.title)}>Acquista</PurchaseButton>
                  </ButtonContainer>
                </Details>
              </CartItem>
            ))}
          </OrderList>
          <TotalPrice>Totale: €{totalPrice.toFixed(2)}</TotalPrice>
        </>
      )}
    </Container>
  );
}

export default Cart;

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

const OrderList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const CartItem = styled.div`
  display: flex;
  align-items: center;
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

const Quantity = styled.p`
  font-size: 14px;
  margin: 5px 0;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const AdjustButton = styled.button`
  padding: 5px 10px;
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

const PurchaseButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  color: white;
  background-color: #008000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #006400;
  }
`;

const TotalPrice = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;
