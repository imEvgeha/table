import React, { useState } from 'react';

export default function PrivateTd(props) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <td>
      <input
        className="inp"
        value={value}
        onChange={(e) => {
          handleChange(e);
          props.handleGetWidthTd(e);
        }}
        style={{ width: props.trWidth * 7.5 + 'px' }}
      ></input>
    </td>
  );
}
