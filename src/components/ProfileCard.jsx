import React from 'react';
import {
  infoHeader,
  sectionImg,
  sectionInfo,
  contactInfo,
} from './ProfileCard.module.css';
import { GlobalContext } from './GlobalContext';

const ProfileCard = ({id}) => {
  const global = React.useContext(GlobalContext);
  console.log(id)

  const card = global?.[id]
    ? {
        nome_completo: `${global[id]?.name?.first} ${global[id].name.last}`,
        foto_de_perfil: global[id]?.picture?.large,
        usuario: global[id]?.login?.username,
        telefone: global[id]?.cell,
        email: global[id]?.email,
        cidade: global[id]?.location?.city,
      }
    : {};

  if (!global || global.length === id) return <p>Carregando...</p>;
  return (
    <>
      <section>
        <header className={infoHeader}>
          <div className={sectionImg}>
            <img src={card.foto_de_perfil} alt="foto de perfil" />
          </div>
          <div className={sectionInfo}>
            <h3>{card.nome_completo}</h3>
            <p>@{card.usuario}</p>
          </div>
        </header>

        <dl className={contactInfo}>
          <dd>{card.telefone}</dd>
          <dd>{card.email}</dd>
          <dd>{card.cidade}</dd>
        </dl>
      </section>
    </>
  );
};

export default ProfileCard;
