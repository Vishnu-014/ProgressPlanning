import React, { Fragment, useState, useEffect, useRef } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import OrderProcess from '../components/OrderProcess';
import Login from '../components/Login/Login';
import { VscChevronLeft } from 'react-icons/vsc';
import { useReactToPrint } from 'react-to-print';

import './table.css';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { useNavigate } from 'react-router-dom';

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

const P = styled.p`
  display: inline;
  font-weight: 700;
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

const Button = styled.button`
  display: flex;
  position: absolute;
  top: 6px;
  right: 2px;
  background-color: #068fff;
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const DateModal = styled.button`
  display: flex;
  position: absolute;
  top: 6px;
  left: 2px;
  background-color: #ff6666;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

const Back = styled.button`
  display: flex;
  position: absolute;
  top: 0px;
  left: 0px;
  background-color: #068fff;
  color: white;
  padding: 8px 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const PrintBtn = styled.button`
  display: flex;
  position: absolute;
  top: 9px;
  left: 120px;
  background-color: #068fff;
  color: white;
  padding: 8px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 20px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
`;

const BoardPurchase = ({ ordersList, getOrder }) => {
  const navigate = useNavigate();

  const [boardProgressDetails, setBoardProgressDetails] = useState([]);
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);

  let orders = ordersList;
  let orderSorted = ordersList.sort(
    (a, b) =>
      new Date(...a.date.split('-').reverse()) -
      new Date(...b.date.split('-').reverse())
  );

  const retiveList = async () => {
    const response = await fetch('https://progres.onrender.com/api/progress');
    const responseData = await response.json();
    setBoardProgressDetails(responseData.Progress);
    setUpdate(false);
  };

  useEffect(() => {
    retiveList();
  }, [update]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };

  const handleSelect = async (date) => {
    let startD = formatDate(date.selection.startDate);
    let endD = formatDate(date.selection.endDate);

    const response = await fetch('https://progres.onrender.com/api/progress');
    const responseData = await response.json();

    console.log('====================================');
    console.log(startD);
    console.log(endD);
    console.log('====================================');
    setBoardProgressDetails(
      responseData.Progress.filter((product) => {
        let productDate = product['boardPurchaseCDate'];
        console.log(productDate + ' ' + 'hel');
        return productDate >= startD && productDate <= endD;
      })
    );

    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
  };

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: 'selection',
  };

  const searchHandler = () => {
    const filter = boardProgressDetails.filter(
      (f) =>
        f.name.toLowerCase() === search.toLowerCase() ||
        f.boardPurchaseProgress.toLowerCase() === search.toLowerCase() ||
        f.designCDate === search
    );
    setBoardProgressDetails(filter);
    setSearch('');

    if (search === '') {
      retiveList();
    }
  };

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <Fragment>
      {/* <ReactToPrint
        trigger={() => {
          return <PrintBtn>Print</PrintBtn>;
        }}
        content={() => this.componentRef}
        documentTitle="Board Purchase"
        pageStyle="print"
      /> */}

      {/* {!loggedIn && <Login onLogin={loginHandler} />} */}
      <Container ref={componentRef}>
        <GlobalStyle />
        <Title>Board Purchase Progress</Title>
        {/* <Back onClick={() => navigate(-1)}>
          <VscChevronLeft size={16} />
          Back
        </Back> */}

        <Search
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <Button onClick={searchHandler}>Search</Button>
        <DateModal onClick={() => setDateOpen(!dateOpen)}>Date 🗓</DateModal>
        {dateOpen && (
          <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        )}

        {/* <Button onClick={logoutHandler}>Logout</Button> */}
        <Wrapper>
          <table className="result">
            <thead>
              <tr>
                <th>Order Name</th>
                <th>Sample/Bulk</th>
                <th>Remarks</th>
                <th>Status</th>
                <th>Completed</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {boardProgressDetails.map(
                (item) =>
                  item.boardPurchase === 'yes' && (
                    <tr key={item.orderNo}>
                      <td>{item.name}</td>
                      <td>{item.sampleBulk}</td>
                      <td>
                        <P>Board Type:</P> {item.boardType},<br />{' '}
                        <P>Board Size: </P>
                        {item.boardSize},<br /> <P>Board Quantity:</P>{' '}
                        {item.boardQuantity}
                      </td>
                      <td>{item.boardPurchaseProgress}</td>
                      <td>{item.boardPurchaseCDate}</td>
                      <td>
                        <OrderProcess
                          item={item}
                          ordersList={orders}
                          getOrder={getOrder}
                          setUpdate={setUpdate}
                        />
                      </td>
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </Wrapper>
      </Container>
    </Fragment>
  );
};

export default BoardPurchase;
