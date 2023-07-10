import styled from 'styled-components'
import Home from './Pages/Home';
import { useState, useEffect } from 'react';
import Progress from './Pages/Progress';
import BoardPurchase from './Pages/BoardPurchase';

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Design from './Pages/Design';
import DieCutting from './Pages/DieCutting';
import Print from './Pages/Print';
import Packing from './Pages/Packing';
import OrderProgress from './Pages/OrderProgress';
import OrderProgressDetail from './Pages/OrderProgressDetail';
import Plate from './Pages/Plate';
import Varnish from './Pages/Varnish';
import Lamination from './Pages/Lamination';
import Uv from './Pages/Uv';
import Foil from './Pages/Foil';
import Pasting from './Pages/Pasting';
import Emboss from './Pages/Emboss';
import Eyelet from './Pages/Eyelet';
import Tape from './Pages/Tape';
import ScreenReady from './Pages/ScreenReady';

const orders_placed = [
  {
    "orderNo": "3423421100",
    "name": "Asta",
    "mtType": "MKT",
    "fb": "Front",
    "date": "01-07-2023",
    "orderQuantity": "500",
    "sampleBulk": "bulk",
    "tagBox": "tag",
    "boardPurchase": "yes",
    "boardType": "Art Board",
    "boardSize": "60 x 80",
    "boardQuantity": "1925",
    "design": "yes",
    "designOldNew": "old",
    "plate": "yes",
    "plateOldNew": "old",
    "plateOld": "plate old",
    "print": "yes",
    "printType": [
      { "value": "SRM", "label": "SRM" },
      { "value": "5ColorPrinter", "label": "5 Color Printer" },
      { "value": "GTO", "label": "GTO" }
    ],
    "varnish": "yes",
    "screenPreparation": 'yes',
    "lamination": "yes",
    "laminationType": "Glass",
    "uv": "yes",
    "emboss": "yes",
    "foil": "yes",
    "pasting": "yes",
    "dieCutting": "yes",
    "dieCuttingNewOld": "new",
    "dieCuttingOld": "Die cutting New",
    "eyelet": "yes",
    "eyeletYes": "eye yes",
    "tape": "yes",
    "tapeYes": "tape yes",
    "packing": "yes",
    "boardPurchaseCDate": "",
    "designCDate": "",
    "plateCDate": "",
    "printCDate": "",
    "varnishCDate": "",
    "screenPreparationCDate": "",
    "laminationCDate": "",
    "uvCDate": "",
    "foilCDate": "",
    "pastingCDate": "",
    "embossCDate": "",
    "dieCuttingCDate": "",
    "eyeletCDate": "",
    "packingCDate": "",
    "boardPurchaseProgress": "Inprogress",
    "designProgress": "Inprogress",
    "plateProgress": "Inprogress",
    "printProgress": "Inprogress",
    "varnishProgress": "Inprogress",
    "laminationProgress": "Inprogress",
    "uvProgress": "Inprogress",
    "foilProgress": "Inprogress",
    "pastingProgress": "Inprogress",
    "embossProgress": "Inprogress",
    "dieCuttingProgress": "Inprogress",
    "eyeletProgress": "Inprogress",
    "tapeProgress": "Inprogress",
    "packingProgress": "Inprogress",
    "screenPreparationProgress": "Inprogress"
  },
]


const Container = styled.div`
  background-color: transparent;
`;

function App() {

  const [ordersList, setOrdersList] = useState([]);
  const [loading, setLoading] = useState(false);

  const retriveList = async () => {
    setLoading(true);
    const response = await fetch('http://localhost:5000/api/progress');

    const responseData = await response.json();

    if (response.ok) {
      setLoading(false);
    }
    console.log("Res");
    console.log(responseData.Progress);
    setOrdersList(responseData.Progress);
    // setListUpdated(false);
  }

  useEffect(() => {
    retriveList();
  }, []);

  const addOrder = async (orderedItem) => {
    console.log("orderItem");
    console.log(orderedItem);
    // await fetch('http://localhost:5000/api/progress', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(orderedItem)
    // });
    // setOrdersList([...ordersList, orderedItem])
  }

  const getOrder = (updatedOrder) => {
    let update = ordersList.find(i => i.orderNo === updatedOrder.orderNo)
    update = updatedOrder
    let updatedList = ordersList.filter(d => d.orderNo !== updatedOrder.orderNo)
    // console.log(updatedList);
    // console.log(update);
    setOrdersList([...updatedList, update])
  }
  console.log('====================================');
  console.log(ordersList);
  console.log('====================================');


  return (
    <BrowserRouter>
      <Container>
        <Routes>
          {!loading &&
            <Route path="/">
              <Route index element={<Home ordersList={ordersList} addOrder={addOrder} />} />
              <Route path="progress" element={<Progress ordersList={ordersList} />}>
              </Route>
              <Route path="/progress/boardpurchase" element={<BoardPurchase ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/design" element={<Design ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/plate" element={<Plate ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/print" element={<Print ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/varnish" element={<Varnish ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/screenready" element={<ScreenReady ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/lamination" element={<Lamination ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/uv" element={<Uv ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/foil" element={<Foil ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/pasting" element={<Pasting ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/emboss" element={<Emboss ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/diecutting" element={<DieCutting ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/eyelet" element={<Eyelet ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/tape" element={<Tape ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="/progress/packing" element={<Packing ordersList={ordersList} getOrder={getOrder} />} />
              <Route path="order" element={<OrderProgress ordersList={ordersList} />}>
              </Route>
              <Route path="/order/orderDetail" element={<OrderProgressDetail ordersList={ordersList} getOrder={getOrder} />} />
            </Route>
          }
        </Routes>

      </Container>
    </BrowserRouter>
  );
}

export default App;

// {/* <Home ordersList={ordersList} addOrder={addOrder}/> */}
// <Progress ordersList={ordersList} />
