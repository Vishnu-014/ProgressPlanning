import React from 'react';
import styled, {createGlobalStyle} from 'styled-components';
import { Link } from 'react-router-dom';
import OrderProgressDetail from './OrderProgressDetail';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(36, 36, 36);
  }
`;

const Container = styled.div`
  background-color: rgb(36, 36, 36);
  min-height: 100vh;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
`;


const Title = styled.h1`
  text-align: center;
  color: #dedede;
  padding-top: 50px;
  font-size: 40px;
  letter-spacing: 2px;
`;
const SubTitle = styled.h2`
  color: #ffffff;
  font-size: 30px;
`;

const P = styled.p`
  color: #ffffff;
  font-size: 20px;
`;

const Line = styled.div`
  border-bottom: 1px solid #fff;
  margin: 0 20%;
`;

const OrderProgress = ({ ordersList }) => {
  return (
    <Container>
      <GlobalStyle />
      <Title>Order Details</Title>
      <Wrapper>
        <SubTitle>Order No</SubTitle>
        <SubTitle>Name</SubTitle>
        <SubTitle>Date</SubTitle>
      </Wrapper>
      <Line />

      {ordersList.map((item) => {
        return (
          <Link
            to="orderDetail" state={{item: item}}
            style={{ textDecoration: 'none', color: 'inherit' }}
            key={item.orderNo}
          >
            <Wrapper>
              <P>{item.orderNo}</P>
              <P>{item.name}</P>
              <P>{item.date}</P>
            </Wrapper>
          </Link>
        );
      })}
    </Container>
  );
};

export default OrderProgress;
