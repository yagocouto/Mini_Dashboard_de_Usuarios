import React from 'react';
import {
  infoHeader,
  sectionImg,
  sectionInfo,
  contactInfo,
} from './ProfileCard.module.css';

const ProfileCard = () => {
  return (
    <>
      <section>
        <div className={infoHeader}>
          <div className={sectionImg}>imagem</div>
          <div className={sectionInfo}>
            <h3>Nome completo</h3>
            <p>@user</p>
          </div>
        </div>

        <div className={contactInfo}>
          <p>Telefone</p>
          <p>data de nascimento</p>
          <p>E-mail</p>
          <p>site</p>
        </div>
      </section>
    </>
  );
};

export default ProfileCard;
