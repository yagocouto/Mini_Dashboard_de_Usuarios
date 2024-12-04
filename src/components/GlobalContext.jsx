import React from 'react';

export const GlobalContext = React.createContext();

export const GlobalStorage = ({ children }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    fetch('https://randomuser.me/api/?nat=BR&results=20')
      .then((res) => res.json())
      .then((json) => setDados(json.results));
  }, []);

  return (
    <GlobalContext.Provider value={dados}>{children}</GlobalContext.Provider>
  );
};
