import React from 'react';
import { container } from './Home.module.css';
import Head from '../components/Head';
import ProfileCard from '../components/ProfileCard';
import DataTable from '../components/DataTable';

const Home = () => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://randomuser.me/api/?nat=BR&results=5')
      .then((res) => res.json())
      .then((json) => setDados(json.results));
  }, []);

  //verificar melhor maneira para desestruturas as informações que preciso utilizar.
  if(dados !== null){
    const image = dados[0].picture.large;
  }

  if(dados === null) return null;
  return (
    <div className={container}>
      <Head title="Home" description="Essa é a descrição da Home" />
      <ProfileCard img={dados[0].picture.large}/>
      <DataTable />
    </div>
  );
};

export default Home;
