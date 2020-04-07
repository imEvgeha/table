import React, { useState } from 'react';

function TableCreater(props) {
  const [trWidth, setTrWidth] = useState(4);

  const handleGetWidthTd = (e) => {
    if (e.target.value.length > trWidth) {
      setTrWidth(e.target.value.length);
    }
  };

  return (
    <div>
      {props.create ? (
        <table border="1px" className="table">
          <tbody>
            {props.rows.map(() => {
              return (
                <tr>
                  {props.lines.map(() => {
                    return (
                      <td>
                        <input
                          className="inp"
                          onChange={handleGetWidthTd}
                          style={{ width: trWidth * 7.5 + 'px' }}
                        ></input>
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      ) : (
        ''
      )}
    </div>
  );
}

export default TableCreater;
