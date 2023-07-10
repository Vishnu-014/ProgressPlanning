import React from 'react';
import styled from 'styled-components';
import Inputs from '../components/Inputs';
import { Link } from 'react-router-dom';

const Container = styled.div`
  background-image: linear-gradient(to right, #7ed56f, #28b485);
  min-height: 100vh;

  display: flex;
  flex-direction: column;
  flex: 1;

  justify-content: center;
  align-items: center;
  position: relative;
`;

const Box = styled.div`
  background-color: #fff;
  min-width: 1200px;
  min-height: 600px;

  border-radius: 15px;
  padding: 15px;
  margin-top: 150px;
  margin-bottom: 100px;
`;

const Button = styled.button`
  width: 200px;
  /* margin: 0 auto; */
  background: transparent;
  border-radius: 3px;
  border: 2px solid #348525;
  background-color: #1F8A70;
  color: #fff;
  font-size: larger;
  padding: 1rem 4rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const Nav = styled.div`
  background-color: #fff;
  display: flex;
  position: absolute;
  top: 20px;
  right: 20px;
  background-color: transparent;
  width: 30%;
  flex-direction: row;
  /* justify-content: space-between; */
  gap: 20px;
  margin-right: 30px;
`;

const Home = ({ ordersList, addOrder }) => {
  return (
    <>
      <Container>
        <Nav>
          <Link to="progress" style={{ textDecoration: 'none' }}>
            <Button type="submit">Progress</Button>
          </Link>
          <Link to="order" style={{ textDecoration: 'none' }}>
            <Button type="submit">Order</Button>
          </Link>
        </Nav>
        <Box>
          <Inputs orderedItemsList={ordersList} addOrder={addOrder} />
        </Box>
      </Container>
    </>
  );
};

export default Home;
