import React, { Fragment, useState, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import OrderProcess from '../components/OrderProcess';
import Login from '../components/Login/Login';
//import Button from '../components/UI/Button/Button';

import { DateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

import './table.css';
import PrintProgress from '../components/PrintProgress';

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
const Button1 = styled.button`
  display: flex;
  position: absolute;
  top: 6px;
  left: 170px;
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

const SelectOption = styled.select`
  margin: 0 10px;
  border-radius: 5px;
`;

const Print = ({ ordersList, getOrder }) => {
  const options = ['GTO', 'SRM', '5ColorPrinter'];
  const [printDetails, setPrintDetails] = useState([]);
  const [update, setUpdate] = useState(false);
  const [search, setSearch] = useState('');
  const [printFilter, setPrintFilter] = useState(options[0]);

  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateOpen, setDateOpen] = useState(false);

  const retiveList = async () => {
    const response = await fetch('https://progres.onrender.com/api/progress');
    const responseData = await response.json();
    setPrintDetails(responseData.Progress);
    setUpdate(false);
  };
  useEffect(() => {
    retiveList();
  }, [update]);

  const searchHandler = () => {
    const filter = printDetails.filter(
      (f) =>
        f.name.toLowerCase() === search.toLowerCase() ||
        f.printProgress.toLowerCase() === search.toLowerCase() ||
        f.printCDate === search
    );
    setPrintDetails(filter);
    setSearch('');

    if (search === '') {
      retiveList();
    }
  };

  const sortHandler = () => {
    let orderSorted = printDetails.sort(
      (a, b) =>
        new Date(...a.date.split('-').reverse()) -
        new Date(...b.date.split('-').reverse())
    );
    console.log(orderSorted);
    setPrintDetails(orderSorted);
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

    const response = await fetch('https://progres.onrender.com/api/progress');
    const responseData = await response.json();

    setPrintDetails(
      responseData.Progress.filter((product) => {
        let productDate = product['printCDate'];
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

  const searchPrintHandler = () => {
    const filter = printDetails.filter((f) =>
      f.printType.map((print) => {
        console.log(print.value.toLowerCase() + 'he');
        console.log(printFilter.toLowerCase() + 'he');
        return print.value.toLowerCase() === printFilter.toLowerCase();
      })
    );
    console.log(filter);
    setPrintDetails(filter);

    if (search === []) {
      retiveList();
    }
  };

  return (
    <Fragment>
      {/* {!loggedIn && <Login onLogin={loginHandler} />} */}

      <Container>
        <GlobalStyle />
        <Title>Print Progress</Title>

        {/* <SelectOption
          value={printFilter}
          onChange={(e) => setPrintFilter(e.target.value)}
        >
          {options.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </SelectOption> */}
        {/* <Button1 onClick={searchPrintHandler}>Search</Button1> */}

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
                <th>Completed Date</th>
                <th>Progress</th>
              </tr>
            </thead>
            <tbody>
              {printDetails.map(
                (item) =>
                  item.printt === 'yes' && (
                    <tr key={item.orderNo}>
                      <td>{item.name}</td>
                      <td>{item.sampleBulk}</td>
                      <td>
                        {item.printType.map((p) => (
                          <p key={p.value}>{p.value}</p>
                        ))}
                      </td>
                      <td>{item.printProgress}</td>
                      <td>{item.printCDate}</td>
                      <td>
                        <PrintProgress
                          item={item}
                          ordersList={printDetails}
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

export default Print;
