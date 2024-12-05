import React from 'react';
import { table, thead, container } from './DataTable.module.css';
import { GlobalContext } from './GlobalContext';

const DataTable = ({ onClick }) => {
  const global = React.useContext(GlobalContext);

  if (!global || global.length === 0) return <p>Carregando...</p>;
  return (
    <div className={container}>
      <table className={table}>
        <thead className={thead}>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Idade</th>
          </tr>
        </thead>
        <tbody>
          {global.map((dados, index) => (
            <tr key={dados?.id?.value} onClick={() => onClick(index)}>
              <td>{dados?.id?.value}</td>
              <td>{dados?.name?.first + ' ' + dados.name.last}</td>
              <td>{dados?.dob?.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
