import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Banner from '../components/Banner';
import Intro from '../components/Intro';
import Nominations from '../components/Nominations';
import Posts from '../components/Posts';
import { theme } from '../Constants';
import StateProvider from '../contexts/Store';

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: stretch;
  margin: 4em 20em;
`;

const Home = () => (
  <StateProvider>
    <ThemeProvider theme={theme}>
      <Intro />
      <Content>
        <Posts />
        <Nominations />
        <Banner />
      </Content>
    </ThemeProvider>
  </StateProvider>
);

export default Home;
