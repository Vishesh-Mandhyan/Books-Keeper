import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import BookList from './Components/BookList';
import AddBook from './Components/AddBook';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache(),
  onError: (e) => { console.log(e) },
})



function App() {
  return (
    <ApolloProvider client={client}>
      <BookList/>
      <AddBook/>
    </ApolloProvider>
  );
}

export default App;
