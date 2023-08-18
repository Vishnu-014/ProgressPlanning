import React, { useEffect, useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const Select = styled.select`
  margin: 0 20px;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  background-color: #579bb1;
  color: #fff;
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  background-color: #eb455f;
  color: #fff;
`;

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString();
  return `${day}-${month}-${year}`;
};

const OrderProcess = ({ item, ordersList, getOrder, setUpdate }) => {
  // console.log('====================================');
  // console.log(item);
  // console.log('====================================');

  const options = ['Inprogress', 'Finished'];
  const [progress, setProgress] = useState({
    orderId: '',
    progress: options[0],
  });

  const submitHandler = async () => {
    let date = formatDate(new Date());
    console.log('orders id');
    console.log(item._id);
    // order = ordersList.find((i) => i.orderNo === progress.orderId);
    // order = {
    //   ...order,
    //   boardPurchaseProgress: progress.progress,
    //   boardPurchaseCDate: date,
    // };
    // console.log(order);
    const response = await fetch(
      `https://progres.onrender.com/api/progress/boardprogress/${item._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          boardPurchaseProgress: progress.progress,
          boardPurchaseCDate: date,
        }),
      }
    );
    setUpdate(true);
  };

  return (
    <div>
      <Select
        value={progress.progress}
        onChange={(e) =>
          setProgress({
            orderId: item._id,
            progress: e.target.value,
          })
        }
      >
        {options.map((value) => (
          <option value={value} key={value}>
            {value}
          </option>
        ))}
      </Select>
      <Button type="submit" onClick={submitHandler}>
        Submit
      </Button>
    </div>
  );
};

export default OrderProcess;
