import React from 'react';
import styled from 'styled-components';
import { description, title } from '../Constants';
import { GlobalStyle } from '../styles/global';
import { Title } from './Header';
import Search from './Search';

const IntroContainer = styled.div`
  display: flex;
`;

const IntroWrapper = styled.div`
  display: block;
  margin: auto;
`;

const Intro = () => (
  <IntroContainer>
    <IntroWrapper>
      <GlobalStyle />
      <Title>{title}</Title>
      <span>{description}</span>
      <Search />
    </IntroWrapper>
  </IntroContainer>
);

export default Intro;
