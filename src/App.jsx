import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Users from './pages/Users';
import Page404 from './components/Page404';
import UsersDetails from './components/UsersDetails';
import { GlobalStorage } from './components/GlobalContext';

const App = () => {
  const [id, setID] = React.useState(0);

  function handleClick(index) {
    setID(index);
  }
  return (
    <GlobalStorage>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route
            path="/"
            end
            element={<Home id={id} handleClick={handleClick} />}
          />
          <Route path="Users/*" element={<Users />} />
          <Route path="/detalhes" element={<UsersDetails id={id} />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </GlobalStorage>
  );
};

export default App;
