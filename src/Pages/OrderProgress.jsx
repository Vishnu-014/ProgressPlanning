import React, { useState, useEffect, Fragment } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import OrderProgressDetail from './OrderProgressDetail';
import { VscChevronLeft } from 'react-icons/vsc';
import Loading from '../Pages/Loading';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: rgb(36, 36, 36);
  }
`;

const Container = styled.div`
  background-color: rgb(36, 36, 36);
  min-height: 100vh;
  position: relative;
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

const Button = styled.button`
  display: flex;
  position: absolute;
  top: 6px;
  left: 30px;
  background-color: #068fff;
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const ButtonSearch = styled.button`
  display: flex;
  position: absolute;
  top: 6px;
  right: 3px;
  background-color: #068fff;
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const Search = styled.input`
  display: flex;
  position: absolute;
  top: 0;
  right: 0;
  width: 230px;
  height: 30px;
  border: 0.4px solid #ccc;
  border-radius: 10px;
  background-color: #eeeeee;
  align-items: center;
  justify-content: center;
  margin: 5px 90px;
  padding: 1px 5px;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.15);
`;

const OrderProgress = ({ ordersList }) => {
  const navigate = useNavigate();
  const [orderDetails, setOrderDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState('');


  const retiveList = async () => {
    setLoading(true);
    const response = await fetch('https://progres.onrender.com/api/progress');
    const responseData = await response.json();
    setOrderDetails(responseData.Progress);
    // setUpdate(false);
    setLoading(false);
  };

  useEffect(() => {  
    retiveList();
  }, []);

   const searchHandler = () => {
    const filter = orderDetails.filter(
      (f) =>
        f.name.toLowerCase() === search.toLowerCase() ||
        f.boardPurchaseProgress.toLowerCase() === search.toLowerCase() ||
        f.designCDate === search
    );
    setOrderDetails(filter);
    setSearch('');

    if (search === '') {
      retiveList();
    }
  };

  return (
    <Fragment>
      {loading && <Loading />}
      {!loading && (
        <Container>
          <GlobalStyle />
          <Search
            placeholder="Search"
            onChange={(e) => setSearch(e.target.value)}
            value={search}
          />
          <ButtonSearch onClick={searchHandler}>Search</ButtonSearch>
          <Button onClick={() => navigate(-1)}>
            <VscChevronLeft size={16} />
            Back
          </Button>
          <Title>Order Details</Title>
          <Wrapper>
            <SubTitle>Order No</SubTitle>
            <SubTitle>Name</SubTitle>
            <SubTitle>Date</SubTitle>
          </Wrapper>
          <Line />

          {orderDetails.map((item) => {
            return (
              <Link
                to="orderDetail"
                state={{ item: item }}
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
      )}
    </Fragment>
  );
};

export default OrderProgress;
