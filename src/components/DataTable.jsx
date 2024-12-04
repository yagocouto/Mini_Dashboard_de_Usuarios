import React from 'react';
import { table, thead } from './DataTable.module.css';
import { GlobalContext } from './GlobalContext';

const DataTable = () => {
  const global = React.useContext(GlobalContext);

  function handleClick(event){
    console.log(event.target)
  }

  if (!global || global.length === 0) return <p>Carregando...</p>;
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
        {global.map((dados) => (
          <tr key={dados?.id?.value} onClick={handleClick}>
            <td>{dados?.id?.value}</td>
            <td>{dados?.name?.first + ' ' + dados.name.last}</td>
            <td>{dados?.dob?.age}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
