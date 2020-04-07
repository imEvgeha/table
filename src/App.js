import React, { useState } from 'react';
import TableCreater from './Components/TableCreater';

function App() {
  const [rowsValue, setRowsValue] = useState('');
  const [linesValue, setLinesValue] = useState('');
  const [create, setCreate] = useState(false);
  const [rowsArr, setRowsArr] = useState([]);
  const [linesArr, setLinesArr] = useState([]);

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
    if (rowsValue < 1 || linesValue < 1) return;
    if (rowsValue > 30 || linesValue > 30) return;
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
          <input type="submit" value="Create" className="btn"></input>
        </form>
      </div>
      <div className="TableDIV">
        <TableCreater rows={rowsArr} lines={linesArr} create={create} />
      </div>
    </div>
  );
}

export default App;
