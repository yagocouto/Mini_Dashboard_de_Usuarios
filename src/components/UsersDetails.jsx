import React from 'react';
import './UsersDetails.module.css';
import { GlobalContext } from './GlobalContext';

const UsersDetails = ({id}) => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  if (!global || global.length === 0) return <p>Carregando...</p>;
  return (
    <section>
      <div>
        <img src={global[id]?.picture?.large} alt="avatar" />
      </div>
      <ul>
        <li>
          <h3>Detalhes Pessoais</h3>
        </li>
        <li>
          <strong>Nome completo</strong>: Senhorita Jennie Nichols
        </li>
        <li>
          <strong>Sexo</strong>: Feminino
        </li>
        <li>
          <strong>Data de nascimento</strong>: 08/03/1992 (30 anos)
        </li>
        <li>
          <strong>Nacionalidade</strong>: EUA
        </li>
      </ul>

      <ul>
        <li>
          <h3>Contato</h3>
        </li>
        <li>
          <strong>E-mail</strong>: jennie.nichols@example.com
        </li>
        <li>
          <strong>Telefone</strong>: (272) 790-0888
        </li>
        <li>
          <strong>Celular</strong>: (489) 330-2385
        </li>
      </ul>

      <ul>
        <li>
          <h3>Endereço</h3>
        </li>
        <li>
          <strong>Rua</strong>: 8929 Valwood Pkwy
        </li>
        <li>
          <strong>Cidade</strong>: Billings
        </li>
        <li>
          <strong>Estado</strong>: Michigan
        </li>
        <li>
          <strong>País</strong>: Estados Unidos
        </li>
        <li>
          <strong>Código Postal</strong>: 63104
        </li>
      </ul>

      <ul>
        <li>
          <h3>Conta de Usuário</h3>
        </li>
        <li>
          <strong>Nome de usuário</strong>: yellowpeacock117
        </li>
        <li>
          <strong>Senha</strong>: addison
        </li>
      </ul>

      <ul>
        <li>
          <h3>Registro</h3>
        </li>
        <li>
          <strong>Data de registro</strong>: 09/07/2007 (14 anos atrás)
        </li>
      </ul>
    </section>
  );
};

export default UsersDetails;
