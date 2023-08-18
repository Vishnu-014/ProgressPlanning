import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import Select from 'react-select';
import { Link } from 'react-router-dom';

const orders_placed = [
  {
    orderNo: '1686481695695',
    name: 'order1',
    boardPurchase: 'yes',
    design: 'yes',
    packing: 'yes',
    print: 'yes',
    printType: 'SRM',
    boardPurchaseProgress: 'Inprogress',
    designProgress: 'Inprogress',
    printProgress: 'Inprogress',
    packingProgress: 'Inprogress',
  },
  {
    orderNo: '16864816956100',
    name: 'order2',
    boardPurchase: 'yes',
    design: 'yes',
    packing: 'yes',
    print: 'yes',
    printType: '5 Color Printer',
    boardPurchaseProgress: 'Inprogress',
    designProgress: 'Inprogress',
    printProgress: 'Inprogress',
    packingProgress: 'Inprogress',
  },
];

const Form = styled.form`
  /* background-color: red; */
  display: grid;
  grid-template-columns: 1fr, 1fr;
  /* flex-direction: column; */
  gap: 20px;
`;

const InputItem = styled.div`
  /* background-color: green; */

  display: flex;
`;

const Label = styled.label`
  font-size: 24px;
  margin-left: 10px;
  margin-right: 40px;

  flex: 0.15;
  /* background-color: blueviolet; */
`;

const Input = styled.input`
  width: 20%;
  border: 1.5px solid #000;
  border-radius: 10px;
  padding: 0 10px;
  flex: 1;
`;

const Button = styled.button`
  width: 200px;
  margin: 0 auto;
  background: transparent;
  border-radius: 3px;
  border: 2px solid #348525;
  background-color: #3f947c;
  color: #fff;
  font-size: larger;
  padding: 1rem 4rem;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

const SelectOption = styled.select`
  margin: 0 10px;
  border-radius: 5px;
`;

const Printers = styled.div`
  /* background-color: blue; */

  display: flex;
  flex: 1;
  justify-content: space-between;
`;

const options = [
  { value: 'SRM', label: 'SRM' },
  { value: '5ColorPrinter', label: '5 Color Printer' },
  { value: 'GTO', label: 'GTO' },
  { value: 'GTO', label: 'GTO' },
];
const optionsLamination = ['Wet', 'Glass', 'Matte', 'Velvet', 'none'];
const optionssType = ['MT', 'PT', 'MKT'];
const optionssTypeFB = ['Front', 'Back'];

const Inputs = ({ orderedItemsList, addOrder }) => {
  const [orderNo, setOrderNo] = useState('');
  const [name, setName] = useState('');
  const [sampleBulk, setSampleBulk] = useState('');
  const [tagBox, setTagBox] = useState('');
  const [orderQuantity, setOrderQuantity] = useState(1);
  const [boardType, setBoardType] = useState('');
  const [boardQuantity, setboardQuantity] = useState('');
  const [boardSize, setboardSize] = useState('');
  const [boardPurchase, setBoardPurchase] = useState('');
  const [design, setDesign] = useState('yes');
  const [designOldNew, setDesignOldNew] = useState('');
  const [plate, setPlate] = useState('yes');
  const [plateOldNew, setPlateOldNew] = useState('');
  const [plateOld, setPlateOld] = useState('');
  const [varnish, setVarnish] = useState('');
  // const [screenPreparation, setScreenPreparation] = useState('');
  const [lamination, setLamination] = useState('yes');
  const [laminationType, setLaminationType] = useState(optionsLamination[0]);
  const [uv, setUv] = useState('');
  const [emboss, setEmboss] = useState('');
  const [foil, setFoil] = useState('');
  const [pasting, setPasting] = useState('');
  const [dieCutting, setDieCutting] = useState('');
  const [dieCuttingNewOld, setDieCuttingNewOld] = useState('');
  const [dieCuttingOld, setDieCuttingOld] = useState('');
  const [eyelet, setEyelet] = useState('');
  const [eyeletYes, setEyeletYes] = useState('');
  const [tape, setTape] = useState('');
  const [tapeYes, setTapeYes] = useState('');
  const [print, setPrint] = useState('yes');
  const [packing, setPacking] = useState('yes');
  const [printType, setPrintType] = useState([]);
  const [optionsType, setOptionsType] = useState(optionssType[0]);
  const [optionsTypeFB, setOptionsTypeFB] = useState(optionssTypeFB[0]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear().toString();

    return `${day}-${month}-${year}`;
  };

  const orderNoHandler = (event) => {
    setOrderNo(event.target.value);
  };

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const boardPurchaseHandler = (event) => {
    setBoardPurchase(event.target.value);
  };
  const designHandler = (event) => {
    setDesign(event.target.value);
  };

  const designOldHandler = (e) => {
    setDesignOldNew(e.target.value);
  };

  const printHandler = (event) => {
    setPrint(event.target.value);
  };
  const packingHandler = (event) => {
    setPacking(event.target.value);
  };
  const diecuttingHandler = (event) => {
    setDieCutting(event.target.value);
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    let Order = {};
    Order = {
      orderNo: orderNo,
      name: name,
      optionsType,
      optionsTypeFB,
      date: formatDate(date),
      orderQuantity: orderQuantity,
      sampleBulk: sampleBulk,
      tagBox: tagBox,
      boardPurchase,
      boardType: boardType,
      boardSize: boardSize,
      boardQuantity: boardQuantity,
      design,
      designOldNew: designOldNew,
      plate,
      plateOldNew: plateOldNew,
      plateOld: plateOld,
      printt: print,
      printType: printType,
      varnish,
      screenPreparation: '',
      lamination,
      laminationType: laminationType,
      uv,
      emboss,
      foil: foil,
      pasting: pasting,
      dieCutting,
      dieCuttingNewOld: dieCuttingNewOld,
      dieCuttingOld: dieCuttingOld,
      eyelet,
      eyeletYes: eyeletYes,
      tape,
      tapeYes: tapeYes,
      packing,
      boardPurchaseProgress: 'Nil',
      designProgress: 'Nil',
      plateProgress: 'Nil',
      printProgress: 'Nil',
      varnishProgress: 'Nil',
      laminationProgress: 'Nil',
      uvProgress: 'Nil',
      foilProgress: 'Nil',
      pastingProgress: 'Nil',
      embossProgress: 'Nil',
      dieCuttingProgress: 'Nil',
      eyeletProgress: 'Nil',
      tapeProgress: 'Nil',
      packingProgress: 'Nil',
      screenPreparationProgress: 'Nil',
    };

    for (const key in Order) {
      if (key === 'boardPurchase' && Order[key] === 'yes') {
        Order['boardPurchaseProgress'] = 'Inprogress';
      }
      if (key === 'design' && Order[key] === 'yes') {
        Order['designProgress'] = 'Inprogress';
      }
      if (key === 'plate' && Order[key] === 'yes') {
        Order['plateProgress'] = 'Inprogress';
      }
      if (key === 'printt' && Order[key] === 'yes') {
        Order['printProgress'] = 'Inprogress';
      }
      if (key === 'varnish' && Order[key] === 'yes') {
        Order['varnishProgress'] = 'Inprogress';
      }
      if (key === 'lamination' && Order[key] === 'yes') {
        Order['laminationProgress'] = 'Inprogress';
      }
      if (key === 'uv' && Order[key] === 'yes') {
        Order['uvProgress'] = 'Inprogress';
      }
      if (key === 'foil' && Order[key] === 'yes') {
        Order['foilProgress'] = 'Inprogress';
      }
      if (key === 'pasting' && Order[key] === 'yes') {
        Order['pastingProgress'] = 'Inprogress';
      }
      if (key === 'emboss' && Order[key] === 'yes') {
        Order['embossProgress'] = 'Inprogress';
      }
      if (key === 'dieCutting' && Order[key] === 'yes') {
        Order['dieCuttingProgress'] = 'Inprogress';
      }
      if (key === 'dieCutting' && Order[key] === 'yes') {
        Order['eyeletProgress'] = 'Inprogress';
      }
      if (key === 'eyelet' && Order[key] === 'yes') {
        Order['packingProgress'] = 'Inprogress';
      }
      if (key === 'tape' && Order[key] === 'yes') {
        Order['tapeProgress'] = 'Inprogress';
      }
      if ((key === 'uv' || key === 'emboss') && Order[key] === 'yes') {
        Order['screenPreparationProgress'] = 'Inprogress';
        Order['screenPreparation'] = 'yes';
        // setScreenPreparation('yes')
      } else {
        if (Order['emboss'] !== 'yes' && Order['uv'] !== 'yes') {
          Order['screenPreparationProgress'] = 'Nil';
          Order['screenPreparation'] = 'No';
        }
        // setScreenPreparation('no')
      }

      // if (
      //   key === 'emboss' && Order['em'] === 'yes'
      // ) {
      //   Order['screenPreparationProgress'] = 'Inprogress';
      //   Order['screenPreparation'] = 'yes';
      //   // setScreenPreparation('yes')
      // } else {
      //   Order['screenPreparationProgress'] = 'Nil';
      //   Order['screenPreparation'] = 'No';
      //   // setScreenPreparation('no')
      // }
      // console.log(`${key}: ${Order[key]}`);
    }

    // console.log('====================================');
    // console.log('===============Order Taken==========');
    // console.log('====================================');
    // console.log(JSON.stringify(Order));
    // console.log('====================================');

    await fetch('https://progres.onrender.com/api/progress', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        orderNo: orderNo,
        name: name,
        mtType: optionsType,
        fb: optionsTypeFB,
        date: formatDate(date),
        orderQuantity: orderQuantity,
        sampleBulk: sampleBulk,
        tagBox: tagBox,
        boardPurchase,
        boardType: boardType,
        boardSize: boardSize,
        boardQuantity: boardQuantity,
        design,
        designOldNew: designOldNew,
        plate,
        plateOldNew: plateOldNew,
        plateOld: plateOld,
        printt: print,
        printType: printType,
        varnish,
        screenPreparation: Order.screenPreparation,
        lamination,
        laminationType: laminationType,
        uv,
        emboss,
        foil: foil,
        pasting: pasting,
        dieCutting,
        dieCuttingNewOld: dieCuttingNewOld,
        dieCuttingOld: dieCuttingOld,
        eyelet,
        eyeletYes: eyeletYes,
        tape,
        tapeYes: tapeYes,
        packing,
        boardPurchaseProgress: Order.boardPurchaseProgress,
        designProgress: Order.designProgress,
        plateProgress: Order.plateProgress,
        printProgress: Order.printProgress,
        varnishProgress: Order.varnishProgress,
        laminationProgress: Order.laminationProgress,
        uvProgress: Order.uvProgress,
        foilProgress: Order.foilProgress,
        pastingProgress: Order.pastingProgress,
        embossProgress: Order.embossProgress,
        dieCuttingProgress: Order.dieCuttingProgress,
        eyeletProgress: Order.eyeletProgress,
        tapeProgress: Order.tapeProgress,
        packingProgress: Order.packingProgress,
        screenPreparationProgress: Order.screenPreparationProgress,
      }),
    });

    addOrder(Order);

    // setOrdersPlaced([...ordersPlaced, Order]);
    // console.log('====================================');
    // console.log(ordersPlaced);
    // console.log('====================================');
    alert('Order Placed');
  };

  const [date, setDate] = useState('');
  const dateInputRef = useRef(null);

  const handleChange = (e) => {
    setDate(e.target.value);
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputItem>
        <Label htmlFor="orederno">Order No :</Label>
        <Input
          id="orederNo"
          type="text"
          placeholder="Order No"
          value={orderNo}
          onChange={orderNoHandler}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="username">Name :</Label>
        <Input
          id="userName"
          type="text"
          placeholder="Name"
          value={name}
          onChange={nameHandler}
        />
        <SelectOption
          value={optionsType}
          onChange={(e) => setOptionsType(e.target.value)}
        >
          {optionssType.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </SelectOption>
        <SelectOption
          value={optionsTypeFB}
          onChange={(e) => setOptionsTypeFB(e.target.value)}
        >
          {optionssTypeFB.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </SelectOption>
      </InputItem>
      <InputItem>
        <Label htmlFor="orederqty">Order Qty :</Label>
        <Input
          id="orederqty"
          type="text"
          placeholder="Order Quantity"
          value={orderQuantity}
          onChange={(e) => setOrderQuantity(e.target.value)}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="date">Date :</Label>
        <Input
          id="date"
          type="date"
          placeholder="Date"
          value={date}
          onChange={handleChange}
          ref={dateInputRef}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="sampleB">Sample/Bulk:</Label>
        <Input
          id="sampleB"
          type="text"
          placeholder="Sample / Bulk"
          value={sampleBulk}
          onChange={(e) => setSampleBulk(e.target.value)}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="tagbox">Tag/Box:</Label>
        <Input
          id="tagbox"
          type="text"
          placeholder="Tag / Box"
          value={tagBox}
          onChange={(e) => setTagBox(e.target.value)}
        />
      </InputItem>
      {/* BOARD */}
      <InputItem>
        <Label htmlFor="boardPurchase">Board Purchase :</Label>
        <Input
          id="boardPurchase"
          type="text"
          placeholder="Yes / No"
          value={boardPurchase}
          onChange={boardPurchaseHandler}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="boardType">Board Type :</Label>
        <Input
          id="boardType"
          type="text"
          placeholder="Board Type"
          value={boardType}
          onChange={(e) => setBoardType(e.target.value)}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="boardSize">Board Size :</Label>
        <Input
          id="boardSize"
          type="text"
          placeholder="Board Size"
          value={boardSize}
          onChange={(e) => setboardSize(e.target.value)}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="boardQty">Board Qty :</Label>
        <Input
          id="boardQty"
          type="text"
          placeholder="Board Qty"
          value={boardQuantity}
          onChange={(e) => setboardQuantity(e.target.value)}
        />
      </InputItem>
      {/* Design */}
      <InputItem>
        <Label htmlFor="design">Design :</Label>
        <Input
          id="design"
          type="text"
          placeholder="Yes / No"
          value={design}
          onChange={designHandler}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="design">Design Old / New :</Label>
        <Input
          id="design"
          type="text"
          placeholder="Old / New"
          value={designOldNew}
          onChange={designOldHandler}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="plate">Plate :</Label>
        <Input
          id="plate"
          type="text"
          placeholder="Yes / No"
          value={plate}
          onChange={(e) => setPlate(e.target.value)}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="plate">Plate Old / New :</Label>
        <Input
          id="plate"
          type="text"
          placeholder="Old / New"
          value={plateOldNew}
          onChange={(e) => setPlateOldNew(e.target.value)}
        />
      </InputItem>
      {plateOldNew.toLowerCase() === 'old' && (
        <InputItem>
          <Label htmlFor="plate">Plate Old :</Label>
          <Input
            id="plate"
            type="text"
            placeholder="Plate Old"
            value={plateOld}
            onChange={(e) => setPlateOld(e.target.value)}
          />
        </InputItem>
      )}

      {/* Printing START */}

      <InputItem>
        <Label htmlFor="printing">Printing :</Label>
        <Printers>
          <Input
            id="printing"
            type="text"
            placeholder="Yes / No"
            value={print}
            onChange={printHandler}
          />
          {/* <SelectOption
            value={printType}
            onChange={(e) => setPrintType(e.target.value)}
          >
            {options.map((value) => (
              <option value={value} key={value}>
                {value}
              </option>
            ))}
          </SelectOption> */}
          <Select
            defaultValue={printType}
            onChange={setPrintType}
            options={options}
            isMulti
          />
        </Printers>
      </InputItem>

      {/* Printing END */}

      {/* Varnish START */}
      <InputItem>
        <Label htmlFor="varnish">Varnish :</Label>
        <Input
          id="plate"
          type="text"
          placeholder="Yes / No"
          value={varnish}
          onChange={(e) => setVarnish(e.target.value)}
        />
      </InputItem>
      {/* Varnish END */}

      {/* Lamination START */}
      <InputItem>
        <Label htmlFor="Lamination">Lamination:</Label>
        <Input
          id="Lamination"
          type="text"
          placeholder="Yes / No"
          value={lamination}
          onChange={(e) => setLamination(e.target.value)}
        />
        <SelectOption
          value={laminationType}
          onChange={(e) => setLaminationType(e.target.value)}
        >
          {optionsLamination.map((value) => (
            <option value={value} key={value}>
              {value}
            </option>
          ))}
        </SelectOption>
      </InputItem>
      {/* Lamination END */}

      {/* UV START */}
      <InputItem>
        <Label htmlFor="uv">UV :</Label>
        <Input
          id="uv"
          type="text"
          placeholder="Yes / No"
          value={uv}
          onChange={(e) => setUv(e.target.value)}
        />
      </InputItem>
      {/* UV END */}

      {/* Emboss or Deboss START */}
      <InputItem>
        <Label htmlFor="EmbossorDeboss">Emboss or Deboss :</Label>
        <Input
          id="EmbossorDeboss"
          type="text"
          placeholder="Yes / No"
          value={emboss}
          onChange={(e) => setEmboss(e.target.value)}
        />
      </InputItem>
      {/* Emboss or Deboss END */}

      {/* Foil START */}
      <InputItem>
        <Label htmlFor="foil">Foil :</Label>
        <Input
          id="foil"
          type="text"
          placeholder="Yes / No"
          value={foil}
          onChange={(e) => setFoil(e.target.value)}
        />
      </InputItem>
      {/* Foil END */}

      {/* Pasting START */}
      <InputItem>
        <Label htmlFor="Pasting">Pasting :</Label>
        <Input
          id="Pasting"
          type="text"
          placeholder="Yes / No"
          value={pasting}
          onChange={(e) => setPasting(e.target.value)}
        />
      </InputItem>
      {/* Pasting END */}

      {/* Die Cutting START */}
      <InputItem>
        <Label htmlFor="diecutting">Die Cutting :</Label>
        <Input
          id="diecutting"
          type="text"
          placeholder="Yes / No"
          value={dieCutting}
          onChange={diecuttingHandler}
        />
      </InputItem>
      <InputItem>
        <Label htmlFor="diecutting">Die Cutting Old / New :</Label>
        <Input
          id="diecutting"
          type="text"
          placeholder="Old / New"
          value={dieCuttingNewOld}
          onChange={(e) => setDieCuttingNewOld(e.target.value)}
        />
      </InputItem>
      {dieCuttingNewOld.toLowerCase() === 'old' && (
        <InputItem>
          <Label htmlFor="diecutting">Die Cutting {dieCuttingNewOld} :</Label>
          <Input
            id="diecutting"
            type="text"
            placeholder={`Die Cutting ${dieCuttingNewOld}`}
            value={dieCuttingOld}
            onChange={(e) => setDieCuttingOld(e.target.value)}
          />
        </InputItem>
      )}
      {dieCuttingNewOld.toLowerCase() === 'new' && (
        <InputItem>
          <Label htmlFor="diecutting">Die Cutting {dieCuttingNewOld} :</Label>
          <Input
            id="diecutting"
            type="text"
            placeholder={`Die Cutting ${dieCuttingNewOld}`}
            value={dieCuttingOld}
            onChange={(e) => setDieCuttingOld(e.target.value)}
          />
        </InputItem>
      )}
      {/* Die Cutting END */}

      {/* Eyelet START */}
      <InputItem>
        <Label htmlFor="Eyelet">Eyelet :</Label>
        <Input
          id="Eyelet"
          type="text"
          placeholder="Yes / No"
          value={eyelet}
          onChange={(e) => setEyelet(e.target.value)}
        />
      </InputItem>
      {eyelet.toLowerCase() === 'yes' && (
        <InputItem>
          <Label htmlFor="Eyelet">Eyelet Yes :</Label>
          <Input
            id="Eyelet"
            type="text"
            placeholder="Eyelet"
            value={eyeletYes}
            onChange={(e) => setEyeletYes(e.target.value)}
          />
        </InputItem>
      )}
      {/* Eyelet END */}

      {/* Tape START */}
      <InputItem>
        <Label htmlFor="tape">Tape :</Label>
        <Input
          id="tape"
          type="text"
          placeholder="Yes / No"
          value={tape}
          onChange={(e) => setTape(e.target.value)}
        />
      </InputItem>
      {tape.toLowerCase() === 'yes' && (
        <InputItem>
          <Label htmlFor="tape">Tape Yes :</Label>
          <Input
            id="tape"
            type="text"
            placeholder="Tape Yes"
            value={tapeYes}
            onChange={(e) => setTapeYes(e.target.value)}
          />
        </InputItem>
      )}
      {/* Tape END */}

      <InputItem>
        <Label htmlFor="packing">Packing :</Label>
        <Input
          id="packing"
          type="text"
          placeholder="Packing"
          value={packing}
          onChange={packingHandler}
        />
      </InputItem>

      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default Inputs;
