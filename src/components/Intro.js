import React from 'react';
import styled from 'styled-components';
import { description, Device, title } from '../Constants';
import { GlobalStyle } from '../styles/global';
import { Title } from './Header';
import Search from './Search';

const IntroContainer = styled.div`
  display: block;
  margin: 2em;
`;

const TextWrapper = styled.div`
  margin: auto;
  padding: 1em;
  box-sizing: border-box;
  @media ${Device.tablet} {
    width: 80%;
  }
  @media ${Device.laptop} {
    width: 50%;
  }
`;

const Intro = () => (
  <IntroContainer>
    <TextWrapper>
      <GlobalStyle />
      <Title>{title}</Title>
      <span>{description}</span>
    </TextWrapper>
    <Search />
  </IntroContainer>
);

export default Intro;
