import React, { useState, useEffect } from 'react';
import TableCreator from './Components/TableCreator';
import getWidthTd from './Helpers/getWidthTd';

function App() {
  const [rowsValue, setRowsValue] = useState('');
  const [linesValue, setLinesValue] = useState('');
  const [create, setCreate] = useState(false);
  const [rowsArr, setRowsArr] = useState([]);
  const [linesArr, setLinesArr] = useState([]);
  const [counter, setCounter] = useState(0);
  const [trWidth, setTrWidth] = useState(4);

  const handleInputsChange = (e) => {
    const name = e.target.name;
    if (name === 'Rows') {
      setRowsValue(e.target.value);
    }
    if (name === 'Lines') {
      setLinesValue(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (create === true && rowsValue !== '' && linesValue !== '') {
      alert('You must delete your table before creatind a new one');
      setRowsValue('');
      setLinesValue('');
      return;
    }
    if (create === true && rowsValue === '' && linesValue === '') {
      alert('Your table will be deleted');
      setCreate(false);
      setCounter(0);
      setTrWidth(4);
      return;
    }
    if (rowsValue < 1 || linesValue < 1 || rowsValue > 30 || linesValue > 30) {
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

  const createTablesArr = () => {
    const arrRows = [];
    const arrLines = [];
    for (let i = 0; i < rowsValue; i++) {
      arrRows.push(true);
    }
    for (let i = 0; i < linesValue; i++) {
      arrLines.push(true);
    }
    setRowsArr(arrRows);
    setLinesArr(arrLines);
  };

  const handleGetWidthTdHelper = (value) => {
    setCounter(counter + 1);
    setTrWidth(value);
  };

  const handleGetWidthTd = (event) => {
    getWidthTd(event, trWidth, rowsArr, counter, handleGetWidthTdHelper);
  };

  return (
    <div className="App">
      <div className="Inputs">
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
          handleGetWidthTd={handleGetWidthTd}
        />
      </div>
    </div>
  );
}

export default App;
