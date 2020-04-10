import React, { useState } from 'react';

export default function PrivateTd(props) {
  const [value, setValue] = useState('');
  const [doubleClicked, setDoubleClicked] = useState(false);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleDoubleClick = () => {
    setDoubleClicked(!doubleClicked);
    props.additionValues(value, !doubleClicked);
  };

  const _check_input_value = () => {
    return value !== '' || value[0] !== ' ';
  };

  const _inpit_style = () => {
    if (doubleClicked) {
      return {
        width: props.trWidth * 7.5 + 'px',
        outline: 'auto',
        outlineColor: 'blue',
      };
    }
    return { width: props.trWidth * 7.5 + 'px' };
  };

  return (
    <td>
      <input
        className="inp"
        value={value}
        title={_check_input_value ? value : ''}
        onChange={(e) => {
          handleChange(e);
          props.handleGetWidthTd(e);
        }}
        onDoubleClick={handleDoubleClick}
        style={_inpit_style()}
      ></input>
    </td>
  );
}
