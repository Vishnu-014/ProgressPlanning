import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
import { VscChevronLeft } from 'react-icons/vsc';

const GlobalStyle = createGlobalStyle`
  body {
    background: #1F6E8C;
  }
`;

const Container = styled.div`
  background-color: #1f6e8c;
  padding-top: 20px;
  padding-bottom: 20px;

  display: flex;
  gap: 20px;
  justify-content: space-evenly;
  flex-wrap: wrap;
  margin: 50px;
`;

const Card = styled.div`
  background-color: #fff4f4;
  height: 200px;
  width: 200px;
  border-radius: 25px;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 18px;
`;

const Title = styled.h2``;
const Button = styled.button`
`;

const Back = styled.button`
  display: flex;
  position: absolute;
  top: 10px;
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

const Progress = ({ ordersList }) => {
  console.log(ordersList);

  const navigate = useNavigate();

  return (
    <Container>
      <GlobalStyle />
      {/* DESIGN */}
      <Back onClick={() => navigate(-1)}>
        <VscChevronLeft size={16} />
        Back
      </Back>
      <Link to="design" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Design</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link
        to="boardpurchase"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card>
          <Title>Board Purchase</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="plate" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Plate</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="print" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Print</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="varnish" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Varnish</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link
        to="screenready"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card>
          <Title>Screen Ready</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link
        to="lamination"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card>
          <Title>Lamination</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="uv" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>UV</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="foil" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Foil</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="pasting" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Pasting</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="emboss" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Emboss</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link
        to="diecutting"
        style={{ textDecoration: 'none', color: 'inherit' }}
      >
        <Card>
          <Title>Die Cutting</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="eyelet" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Eyelet</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="tape" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Tape</Title>
          <Button>View</Button>
        </Card>
      </Link>
      <Link to="packing" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Card>
          <Title>Packing</Title>
          <Button>View</Button>
        </Card>
      </Link>
      {
        // ordersList.map((item) => {
        //   return <Card>
        //   </Card>
        // })
      }
    </Container>
  );
};

export default Progress;
