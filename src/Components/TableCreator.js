import React, { useState } from 'react';

function TableCreator(props) {
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
                          onChange={props.handleGetWidthTd}
                          style={{ width: props.trWidth * 7.5 + 'px' }}
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

export default TableCreator;
