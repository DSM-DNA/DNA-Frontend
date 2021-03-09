import React from 'react';
import { UserProvider } from './contexts/user';
import { MainRouter } from './routers';
const App = () => {
  return (
    <UserProvider>
      <MainRouter />
    </UserProvider>
  );
};

export default App;
