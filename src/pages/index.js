import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Constants';
import Banner from '../components/Banner';
import Container from '../containers/Container';
import Intro from '../components/Intro';
import Nominations from '../components/Nominations';
import Posts from '../components/Posts';
import StateProvider from '../contexts/Store';

const Home = () => (
  <StateProvider>
    <ThemeProvider theme={theme}>
      <Intro />
      <Container>
        <Posts />
        <Nominations />
        <Banner />
      </Container>
    </ThemeProvider>
  </StateProvider>
);

export default Home;
