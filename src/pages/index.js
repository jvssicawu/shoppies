import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Constants';
import Banner from '../components/Banner';
import Container from '../containers/Container';
import Intro from '../components/Intro';
import Metadata from '../contexts/Metadata';
import Nominations from '../components/Nominations';
import Posts from '../components/Posts';
import StateProvider from '../contexts/Store';

const Home = () => (
  <StateProvider>
    <Metadata />
    <ThemeProvider theme={theme}>
      <Intro />
      <Banner />
      <Container>
        <Posts />
        <Nominations />
      </Container>
    </ThemeProvider>
  </StateProvider>
);

export default Home;
