import React from 'react';
import './Table.css';
const Table = ({ titles = [], keys = [], data = [], onButtonClick, showAction = false, actionTitle = 'Action', buttonLabel = 'Action' }) => {
  return (
    <table className="Table-table">
      <thead>
        <tr>
          {titles.map((title, index) => (
            <th key={index}>{title}</th>
          ))}
          {showAction && <th>{actionTitle}</th>}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {keys.map((key, columnIndex) => (
              <td key={columnIndex}>{row[key]}</td>
            ))}
            {showAction && (
              <td>
                <button className='actionbtn' onClick={() => onButtonClick(row)}>{buttonLabel}</button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;