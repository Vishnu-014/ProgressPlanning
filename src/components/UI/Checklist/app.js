import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'SRM', label: 'SRM' },
  { value: '5ColorPrinter', label: '5 Color Printer' },
  { value: 'GTO', label: 'GTO' },
];

export default function App() {
  const [selectedOption, setSelectedOption] = useState([]);
  console.log(selectedOption);

  return (
    <div className="App">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
        isMulti
      />
    </div>
  );
}