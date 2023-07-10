import React from 'react';
import { useLocation } from 'react-router-dom';
import styled, { createGlobalStyle } from 'styled-components';
//import './tableProgress.css';
import classes from './tableProgress.module.css';
const GlobalStyle = createGlobalStyle`
  body {
    background: #fff3e9;
  }
`;

const Container = styled.div`
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  margin-bottom: 100px;
`;

const Title = styled.h1`
  text-align: center;
`;

const Details = styled.div`
  margin-left: 30px;
`;

const Item = styled.h4`
  margin-left: 10px;
`;

const ItemL = styled.h4`
  margin-left: 10px;
  padding-top: 35px;
`;

const Inf = styled.span`
  font-weight: 400;
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

const Line = styled.div`
  border-bottom: 1px solid #bebebe;
  margin: 0 20%;
`;

const Text = styled.span`
  margin-right: 12px;
`;

const Gap = styled.br``;

const OrderProgressDetail = (props) => {
  const location = useLocation();
  const { item } = location.state;
  console.log(item);
  return (
    <>
      <Container>
        <Top>
          <div>
            <Item>
              Tag or Box: <Inf>{item.tagBox}</Inf>
            </Item>
            <Item>
              Board Type: <Inf>{item.boardType}</Inf>
            </Item>
            <Item>
              Order Name: <Inf>{item.name}</Inf>
            </Item>
            <Item>
              Order Quantity: <Inf>{item.orderQuantity}</Inf>
            </Item>
            <Item>
              Date: <Inf>{item.date}</Inf>
            </Item>
          </div>
          <div>
            <Item>
              Sample or Bulk: <Inf>{item.sampleBulk}</Inf>
            </Item>
            <Item>
              Board Quantity: <Inf>{item.boardQuantity}</Inf>
            </Item>
            <Item>
              Order No: <Inf>{item.orderNo}</Inf>
            </Item>
            <Item>
              MT/MKT/PT: <Inf>{item.mtType}</Inf>
            </Item>
            <Item>
              FRONT/BACK: <Inf>{item.fb}</Inf>
            </Item>
          </div>
        </Top>
        <Line />
        <br />
        <br />
        <br />
        {/* <thead>
          <tr>
            <th>Process</th>
            <th>Remarks</th>
            <th>Completed Date</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Design</th>
            <td>{item.name}</td>
            <td>{item.sampleBulk}</td>
            <td>-</td>
          </tr>
          <tr>
            <th>BOARD PURCHASE & CUTTING</th>
            <td>{item.name}</td>
            <td>{item.sampleBulk}</td>
            <td>-</td>
          </tr>
        </tbody> */}

        <div className={classes.table_responsive}>
          <table>
            <thead>
              <tr>
                <th>PROCESS</th>
                <th>REMARKS</th>
                <th>COMPLETED DATE</th>
                <th>STATUS</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th>DESIGN</th>
                <td>Design Old/New: {item.designOldNew}</td>
                <td>{item.designCDate !== '' ? item.designCDate : '-'}</td>
                <td>{item.designProgress}</td>
              </tr>
              <tr>
                <th>BOARD PURCHASE & CUTTING</th>
                <td>
                  Type:{item.boardType}, Size:{item.boardSize}, Qty:
                  {item.boardSize}
                </td>
                <td>
                  {item.boardPurchaseCDate !== ''
                    ? item.boardPurchaseCDate
                    : '-'}
                </td>
                <td>{item.boardPurchaseProgress}</td>
              </tr>
              <tr>
                <th>PLATE</th>
                <td>
                  {item.plateOldNew} {item.plateOld}
                </td>
                <td>{item.plateCDate !== '' ? item.plateCDate : '-'}</td>
                <td>{item.plateProgress}</td>
              </tr>
              <tr>
                <th>PRINTING</th>
                <td>
                  {item.printType.map((p) => (
                    <Text key={p.label}>{p.value}</Text>
                  ))}
                </td>
                <td>{item.printCDate !== '' ? item.printCDate : '-'}</td>
                <td>{item.printProgress}</td>
              </tr>
              <tr>
                <th>VARNISH</th>
                <td>-</td>
                <td>
                  {item.varnishCDate !== '' ? item.boardPurchaseCDate : '-'}
                </td>
                <td>{item.varnishProgress}</td>
              </tr>
              {/* //? TODO:- SCREEN READY */}
              <tr>
                <th>SCREEN READY</th>
                <td>
                  {' '}
                  UV: {item.uv} <br />
                  Emboss & Deboss: {item.emboss}
                </td>
                <td>
                  {item.screenPreparationCDate !== ''
                    ? item.screenPreparationCDate
                    : '-'}
                </td>
                <td>{item.screenPreparationProgress}</td>
              </tr>
              <tr>
                <th>LAMINATION</th>
                <td>{item.laminationType}</td>
                <td>
                  {item.laminationCDate !== '' ? item.laminationCDate : '-'}
                </td>
                <td>{item.laminationProgress}</td>
              </tr>
              <tr>
                <th>UV</th>
                <td>-</td>
                <td>{item.uvCDate !== '' ? item.uvCDate : '-'}</td>
                <td>{item.uvProgress}</td>
              </tr>
              <tr>
                <th>FOIL</th>
                <td>-</td>
                <td>{item.foilCDate !== '' ? item.foilCDate : '-'}</td>
                <td>{item.foilProgress}</td>
              </tr>
              <tr>
                <th>PASTING</th>
                <td>-</td>
                <td>{item.pastingCDate !== '' ? item.pastingCDate : '-'}</td>
                <td>{item.pastingProgress}</td>
              </tr>
              <tr>
                <th>EMBOSS / DEBOSS</th>
                <td>-</td>
                <td>{item.embossCDate !== '' ? item.embossCDate : '-'}</td>
                <td>{item.embossProgress}</td>
              </tr>
              <tr>
                <th>DIE CUTTING</th>
                <td>
                  {item.dieCutting}, {item.dieCuttingNewOld},{' '}
                  {item.dieCuttingOld}
                </td>
                <td>
                  {item.dieCuttingCDate !== '' ? item.dieCuttingCDate : '-'}
                </td>
                <td>{item.dieCuttingProgress}</td>
              </tr>
              <tr>
                <th>EYELET</th>
                <td>{item.eyeletYes}</td>
                <td>{item.eyeletCDate !== '' ? item.eyeletCDate : '-'}</td>
                <td>{item.eyeletProgress}</td>
              </tr>
              <tr>
                <th>TAPE</th>
                <td>{item.tapeYes}</td>
                <td>{item.tapeCDate !== '' ? item.tapeCDate : '-'}</td>
                <td>{item.tapeProgress}</td>
              </tr>
              <tr>
                <th>PACKING</th>
                <td>-</td>
                <td>{item.packingCDate !== '' ? item.packingCDate : '-'}</td>
                <td>{item.packingProgress}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Container>
    </>
  );
};

export default OrderProgressDetail;

{
  /* <Container>
<GlobalStyle />
<Title>Progress Monitor</Title>
<Details>
  <Item>
    Order No: <Inf>{item.orderNo}</Inf>
  </Item>
  <Item>
    Name: <Inf>{item.name}</Inf>
  </Item>
  <Item>
    Date: <Inf>{item.date}</Inf>
  </Item>
  <Item>
    Board Purchase: <Inf>{item.boardPurchase}</Inf>
  </Item>
  <Item>
    board Purchase Progress: <Inf>{item.boardPurchaseProgress}</Inf>
  </Item>
  <Item>
    Design: <Inf>{item.design}</Inf>
  </Item>
  <Item>
    Design Progress: <Inf>{item.designProgress}</Inf>
  </Item>
  <Item>
    Die Cutting: <Inf>{item.dieCutting}</Inf>
  </Item>
  <Item>
    Die Cutting Progress: <Inf>{item.dieCuttingProgress}</Inf>
  </Item>
  <Item>
    Print: <Inf>{item.print}</Inf>
  </Item>
  <Item>
    Print Progress: <Inf>{item.printProgress}</Inf>
  </Item>
  {/* <Item>
  Print Type: <Inf>{item.printType}</Inf>
</Item> */
}
//   <Item>
//     Packing: <Inf>{item.packing}</Inf>
//   </Item>
//   <Item>
//     Packing Progress: <Inf>{item.packingProgress}</Inf>
//   </Item>
// </Details>
// </Container> */}
