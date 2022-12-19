import React, { ReactElement } from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import MainView from './components/MainView';

import './App.css';

const App = (): ReactElement => {
  const client = new ApolloClient({
    uri: 'http://localhost:4444/',
    cache: new InMemoryCache()
  });

  return (
    <ApolloProvider client={client}>
      <MainView />
    </ApolloProvider>
  );
};

export default App;
