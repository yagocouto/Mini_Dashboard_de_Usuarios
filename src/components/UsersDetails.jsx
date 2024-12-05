import React from 'react';
import './UsersDetails.module.css';
import { GlobalContext } from './GlobalContext';

const UsersDetails = ({ id }) => {
  const global = React.useContext(GlobalContext);
  console.log(global);

  const dadosUsuario = global?.[id]
    ? {
        foto_de_perfil: global[id]?.picture?.large,
        nome_completo: `${global[id]?.name?.first} ${global[id]?.name?.last}`,
        sexo: global[id]?.gender,
        data_de_nascimento: global[id]?.dob?.date, 
        idade: global[id]?.dob?.age,
        nacionalidade: global[id]?.nat,
      }
    : {};

  const {
    foto_de_perfil,
    nome_completo,
    sexo,
    data_de_nascimento, // Tratar dados
    idade,
    nacionalidade,
  } = dadosUsuario;

  console.log(nome_completo);

  if (!global || global.length === 0) return <p>Carregando...</p>;
  return (
    <section>
      <div>
        <img src={foto_de_perfil} alt="avatar" />
      </div>
      <ul>
        <li>
          <h3>Detalhes Pessoais</h3>
        </li>
        <li>
          <strong>Nome completo</strong>: {nome_completo}
        </li>
        <li>
          <strong>Sexo</strong>: {sexo === 'female' ? 'Feminino' : 'Masculino'}
        </li>
        <li>
          <strong>Data de nascimento</strong>: 08/03/1992 ({idade})
        </li>
        <li>
          <strong>Nacionalidade</strong>: {nacionalidade}
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
