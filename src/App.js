import React, { useState } from 'react';
import TableCreator from './Components/TableCreator';
import getWidthTd from './Helpers/getWidthTd';

const MAX_SIZE_IN_CELLS = 30;
const DEFAULT_WIDTH_OF_CELLS = 4;

function App() {
  const [rowsValue, setRowsValue] = useState('');
  const [linesValue, setLinesValue] = useState('');
  const [create, setCreate] = useState(false);
  const [rowsArr, setRowsArr] = useState([]);
  const [linesArr, setLinesArr] = useState([]);
  const [counter, setCounter] = useState(0);
  const [sumInpValue, setSumInpValue] = useState(0);
  const [trWidth, setTrWidth] = useState(DEFAULT_WIDTH_OF_CELLS);

  const handleInputsChange = (e) => {
    const name = e.target.name;
    if (name === 'Rows') {
      setRowsValue(e.target.value);
    }
    if (name === 'Lines') {
      setLinesValue(e.target.value);
    }
  };

  const _cells_value_is_NaN = (value) => {
    return value === '' || value[0] === ' ' || isNaN(value) === true;
  };

  const _table_trying_recreate = () => {
    return create === true && rowsValue !== '' && linesValue !== '';
  };

  const _try_delete_table = () => {
    return create === true && rowsValue === '' && linesValue === '';
  };

  const _cells_quantity_allowed = () => {
    return (
      rowsValue < 1 ||
      linesValue < 1 ||
      rowsValue > MAX_SIZE_IN_CELLS ||
      linesValue > MAX_SIZE_IN_CELLS
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (_table_trying_recreate()) {
      alert('You must delete your table before creatind a new one');
      setRowsValue('');
      setLinesValue('');
      return;
    }
    if (_try_delete_table()) {
      alert('Your table will be deleted');
      setCounter(0);
      setSumInpValue(0);
      setCreate(false);
      setTrWidth(DEFAULT_WIDTH_OF_CELLS);
      return;
    }
    if (_cells_quantity_allowed()) {
      alert('Value do not can be  > 30  or  < 1');
      setRowsValue('');
      setLinesValue('');
      return;
    }
    setCreate(true);
    setRowsValue('');
    setLinesValue('');
    createTablesArr();
  };

  const additionValues = (value, sign) => {
    if (_cells_value_is_NaN(value)) return;
    value = Number(value);
    if (sign) {
      setSumInpValue(sumInpValue + value);
    } else {
      setSumInpValue(sumInpValue - value);
    }
  };

  const createTablesArr = () => {
    const arrRows = new Array(Number(rowsValue)).fill();
    const arrLines = new Array(Number(linesValue)).fill();
    setRowsArr(arrRows);
    setLinesArr(arrLines);
  };

  const handleGetWidthTd = (event) => {
    getWidthTd(event, trWidth, rowsArr, counter, (length) => {
      setCounter(counter + 1);
      setTrWidth(length);
    });
  };

  return (
    <div className="App">
      <div className="Inputs">
        <p className="Sum">Sum: {sumInpValue}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <b>
              Rows:
              <input
                type="number"
                name="Rows"
                onChange={handleInputsChange}
                value={rowsValue}
              ></input>
            </b>
          </div>
          <div>
            <b>
              Lines:
              <input
                type="number"
                name="Lines"
                onChange={handleInputsChange}
                value={linesValue}
              ></input>
            </b>
          </div>
          <input
            type="submit"
            value={
              create && rowsValue === '' && linesValue === ''
                ? 'Delete'
                : 'Create'
            }
            className="btn"
          ></input>
        </form>
      </div>
      <div className="TableDIV">
        <TableCreator
          rows={rowsArr}
          lines={linesArr}
          create={create}
          trWidth={trWidth}
          additionValues={additionValues}
          handleGetWidthTd={handleGetWidthTd}
        />
      </div>
    </div>
  );
}

export default App;
