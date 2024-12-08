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
        email: global[id]?.email,
        telefone: global[id]?.phone,
        celular: global[id]?.cell,
        endereco: global[id]?.location.street.name + ' ' + global[id]?.location.street.number,
        cidade: global[id]?.location.city,
        pais: global[id]?.location.country,
        username: global[id]?.login.username,
        senha: global[id]?.login.password
      }
    : {};

  const {
    foto_de_perfil,
    nome_completo,
    sexo,
    data_de_nascimento, // Tratar dados
    idade,
    nacionalidade,
    email,
    telefone,
    celular,
    endereco,
    cidade,
    pais,
    username,
    senha

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
          <strong>E-mail</strong>: {email}
        </li>
        <li>
          <strong>Telefone</strong>: {telefone}
        </li>
        <li>
          <strong>Celular</strong>: {celular}
        </li>
      </ul>

      <ul>
        <li>
          <h3>Endereço</h3>
        </li>
        <li>
          <strong>Rua</strong>: {endereco}
        </li>
        <li>
          <strong>Cidade</strong>: {cidade}
        </li>
        <li>
          <strong>País</strong>: {pais}
        </li>
      </ul>

      <ul>
        <li>
          <h3>Conta de Usuário</h3>
        </li>
        <li>
          <strong>Nome de usuário</strong>: {username}
        </li>
        <li>
          <strong>Senha</strong>: {senha}
        </li>
      </ul>
    </section>
  );
};

export default UsersDetails;
