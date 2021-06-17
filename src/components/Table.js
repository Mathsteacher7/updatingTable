import React from "react";

const Table = () => {
  const tableRow = (
    <tr>
      <td>date</td>
      <td>flag 1</td>
      <td>result</td>
      <td>flag 2</td>
      <td>guesses</td>
    </tr>
  );
  return (
    <div>
      <table>
        <tr>
          <td colSpan={4}>Game</td>
          <td>players</td>
        </tr>
        {tableRow}
      </table>
    </div>
  );
};

export default Table;
