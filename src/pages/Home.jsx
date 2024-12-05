import React from 'react';
import { container } from './Home.module.css';
import Head from '../components/Head';
import ProfileCard from '../components/ProfileCard';
import DataTable from '../components/DataTable';
import { GlobalStorage } from '../components/GlobalContext';

const Home = ({ id, handleClick }) => {
  return (
    <div className={container}>
      <Head title="Home" description="Essa é a descrição da Home" />
      <ProfileCard id={id} />
      <DataTable onClick={handleClick} />
    </div>
  );
};

export default Home;
