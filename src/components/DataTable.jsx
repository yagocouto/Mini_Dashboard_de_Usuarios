import React from 'react';
import { table, thead } from './DataTable.module.css';

const DataTable = () => {
  return (
    <table className={table}>
      <thead className={thead}>
        <tr>
          <th>ID</th>
          <th>Nome</th>
          <th>Idade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>01</td>
          <td>Yago C</td>
          <td>28 Anos</td>
        </tr>
        <tr>
          <td>01</td>
          <td>Brenda B</td>
          <td>28 Anos</td>
        </tr>
        <tr>
          <td>01</td>
          <td>Otto B.C</td>
          <td>28 Anos</td>
        </tr>
      </tbody>
    </table>
  );
};

export default DataTable;
