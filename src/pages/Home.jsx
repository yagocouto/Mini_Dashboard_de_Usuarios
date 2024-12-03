import React from 'react';
import { container } from './Home.module.css';
import Head from '../components/Head';
import ProfileCard from '../components/ProfileCard';
import DataTable from '../components/DataTable';

const Home = () => {
  return (
    <div className={container}>
      <Head title="Home" description="Essa é a descrição da Home" />
      <ProfileCard />
      <DataTable />
    </div>
  );
};

export default Home;
