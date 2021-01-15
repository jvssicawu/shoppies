import React from 'react';
import Search from '../components/Search';
import Posts from '../components/Posts';
import StateProvider from '../contexts/Store';

const IndexPage = () => (
  <StateProvider>
    <h1>The Shoppies</h1>
    <span>
      Search for your top 5 favourite movies to nominate for the awards!
    </span>
    <Search />
    <Posts />
  </StateProvider>
);

export default IndexPage;
