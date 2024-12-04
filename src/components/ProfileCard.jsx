import React from 'react';
import {
  infoHeader,
  sectionImg,
  sectionInfo,
  contactInfo,
} from './ProfileCard.module.css';
import { GlobalContext } from './GlobalContext';

const ProfileCard = () => {
  const global = React.useContext(GlobalContext);

  const card = global?.[0]
    ? {
        nome_completo: `${global[0]?.name?.first} ${global[0].name.last}`,
        foto_de_perfil: global[0]?.picture?.large,
        usuario: global[0]?.login?.username,
        telefone: global[0]?.cell,
        email: global[0]?.email,
        cidade: global[0]?.location?.city,
      }
    : {};

  if (!global || global.length === 0) return <p>Carregando...</p>;
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
