import React, { Fragment, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
//import Button from '../components/UI/Button/Button';

import './table.css';
import LaminationProgress from '../components/LaminationProgress';
import UvProgress from '../components/UvProgress';
import TapeProgress from '../components/TapeProgress';

const GlobalStyle = createGlobalStyle`
  body {
    background: #fff;
  }
`;

const Container = styled.div`
  margin-top: 20px;
  position: relative;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 20px;
  align-items: center;
`;

const Select = styled.select`
  margin: 0 20px;
  border-radius: 5px;
`;


const OrderNo = styled.div`
  margin-left: -40px;
`;

const Name = styled.div`
  margin-left: -40px;
`;

const Status = styled.div`
  margin-left: -40px;
`;

const Categories = styled.h2`
  padding: 5px 20px;
  margin-left: -380px;
  border-radius: 9px;
  color: #fff;
  background-color: #e67e22;
`;

const Title = styled.h1`
  display: flex;
  align-self: center;
  justify-content: center;
  font-weight: 700;
  color: #333;
  letter-spacing: -0.5px;
  font-size: 2.2rem;
  line-height: 1.05;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  background-color: #b23b3b;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: 6px 4px 5px #00000040;
`;

const P = styled.p`
  display: inline;
  font-weight: 700;
`;

const Tape = ({ ordersList, getOrder }) => {
  let orders = ordersList;

  let orderSorted = ordersList.sort(
    (a, b) =>
      new Date(...a.date.split('-').reverse()) -
      new Date(...b.date.split('-').reverse())
  );

  orders = orderSorted;

  const [loggedIn, setLoggedIn] = useState(true);

  let storedUserLoggedd = localStorage.getItem('isLoggedIn');

  useEffect(() => {
    let storedUserLoggedd = localStorage.getItem('isLoggedIn');
    if (storedUserLoggedd === '1') {
      setLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    localStorage.setItem('isLoggedIn', '1');
    setLoggedIn(true);
  };

  const logoutHandler = () => {
    setLoggedIn(false);
    localStorage.removeItem('isLoggedIn');
  };

  return (
    <Fragment>
      {/* {!loggedIn && <Login onLogin={loginHandler} />} */}
      {loggedIn && (
        <Container>
          <GlobalStyle />
          <Title>Tape Progress</Title>
          {/* <Button onClick={logoutHandler}>Logout</Button> */}
          <Wrapper>
            <table className="result">
              <thead>
                <tr>
                  <th>Order Name</th>
                  <th>Sample/Bulk</th>
                  <th>Remarks</th>
                  <th>Status</th>
                  <th>Completed Date</th>
                  <th>Progress</th>
                </tr>
              </thead>
              <tbody>
                {orderSorted.map(
                  (item) =>
                    item.tape === 'yes' && (
                      <tr key={item.orderNo}>
                        <td>{item.name}</td>
                        <td>{item.sampleBulk}</td>
                        <td>
                          {item.tapeYes}
                        </td>
                        <td>{item.tapeProgress}</td>
                        <td>{item.tapeCDate}</td>
                        <td>
                          <TapeProgress
                            item={item}
                            ordersList={orders}
                            getOrder={getOrder}
                          />
                        </td>
                      </tr>
                    )
                )}
              </tbody>
            </table>
          </Wrapper>
        </Container>
      )}
    </Fragment>
  );
};

export default Tape;
