import React from 'react';
import AppProvider from './src/hooks';
import Routes from './src/routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Routes />
    </AppProvider>
  );
};

export default App;