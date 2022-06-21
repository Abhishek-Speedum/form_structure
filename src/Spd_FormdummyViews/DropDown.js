import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 1, label: 'Computer Science' },
  { value: 2, label: 'Mechanical' },
  { value: 3, label: 'Civil' },
];

 const Dropdown=()=> {
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div >
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
    </div>
  );
}
export default  Dropdown



