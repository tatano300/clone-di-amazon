import React, { useContext } from "react";
import styled from "styled-components";
import { CartContext } from "./CartContext";

function OrderHistory() {
  const { orders } = useContext(CartContext);

  return (
    <Container>
      <Title>Storico Ordini</Title>
      {orders.length === 0 ? (
        <EmptyMessage>Non hai ancora effettuato ordini.</EmptyMessage>
      ) : (
        <OrderList>
          {orders.map((item, index) => (
            <OrderItem key={index}>
              <Image src={item.image} alt={item.title} />
              <Details>
                <ProductTitle>{item.title}</ProductTitle>
                <ProductPrice>{item.price}</ProductPrice>
              </Details>
            </OrderItem>
          ))}
        </OrderList>
      )}
    </Container>
  );
}

export default OrderHistory;

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

const OrderItem = styled.div`
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
