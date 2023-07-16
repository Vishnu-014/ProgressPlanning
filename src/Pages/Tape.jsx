import React, { Fragment, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
//import Button from '../components/UI/Button/Button';

import './table.css';
import TapeProgress from '../components/TapeProgress';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

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

const Tape = ({ ordersList, getOrder }) => {
  const [tapeDetails, setTapeDetails] = useState([]);
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState('');

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);

  const retiveList = async () => {
    const response = await fetch('http://localhost:5000/api/progress');
    const responseData = await response.json();
    setTapeDetails(responseData.Progress);
    setUpdate(false);
  };
  useEffect(() => {
    retiveList();
  }, [update]);

  const searchHandler = () => {
    const filter = tapeDetails.filter(
      (f) =>
        f.name.toLowerCase() === search.toLowerCase() ||
        f.tapeProgress.toLowerCase() === search.toLowerCase() ||
        f.tapeCDate === search
    );
    setTapeDetails(filter);
    setSearch('');

    if (search === '') {
      retiveList();
    }
  };

  const sortHandler = () => {
    let orderSorted = tapeDetails.sort(
      (a, b) =>
        new Date(...a.date.split('-').reverse()) -
        new Date(...b.date.split('-').reverse())
    );
    console.log(orderSorted);
    setTapeDetails(orderSorted);
  };

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

    const response = await fetch('http://localhost:5000/api/progress');
    const responseData = await response.json();

    setTapeDetails(
      responseData.Progress.filter((product) => {
        let productDate = product['tapeCDate'];
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

  return (
    <Fragment>
      
        <Container>
          <GlobalStyle />
          <Title>Tape Progress</Title>
 
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
                {tapeDetails.map(
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
                            ordersList={tapeDetails}
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

export default Tape;
