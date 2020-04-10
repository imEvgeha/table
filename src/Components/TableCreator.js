import React, { useState } from 'react';
import PrivateTd from './PrivateTd';

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
                      <PrivateTd
                        handleGetWidthTd={props.handleGetWidthTd}
                        additionValues={props.additionValues}
                        trWidth={props.trWidth}
                      />
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
