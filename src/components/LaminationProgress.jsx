import React, { useState } from 'react';
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

const LaminationProgress = ({ item, ordersList, getOrder, setUpdate }) => {
  // console.log('====================================');
  // console.log(item);
  // console.log('====================================');

  const options = ['Inprogress', 'Finished'];
  const [progress, setProgress] = useState({
    orderId: '',
    progress: options[0],
  });

  // const submitHandler = () => {
  //   let date = formatDate(new Date())
  //   console.log(date);
  //   let order = {};
  //   order = ordersList.find((i) => i.orderNo === progress.orderId);
  //   order = {
  //     ...order,
  //     laminationProgress: progress.progress,
  //     laminationCDate: date,
  //   };
  //   console.log(order);
  //   getOrder(order);
  // };
  const submitHandler = async () => {
    let date = formatDate(new Date());

    const response = await fetch(
      `https://progres.onrender.com/api/progress/laminationprogress/${item._id}`,
      {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          laminationProgress: progress.progress,
          laminationCDate: date,
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
            orderId: item.orderNo,
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

export default LaminationProgress;
