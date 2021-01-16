import React, { useContext } from 'react';
import styled from 'styled-components';
import { NOMINATION_LABEL, noNominationsMsg } from '../Constants';
import { appContext } from '../contexts/Store';
import Header from './Header';
import Post from './Post';

const NominationsWrapper = styled.div`
  margin: 2em;
  width: 50%;
`;

const Nominations = () => {
  const { state } = useContext(appContext);
  return (
    <NominationsWrapper>
      <Header>Nominations</Header>
      {state.nominations.length === 0 && <p>{noNominationsMsg}</p>}
      {state.nominations.map(({id, title, year, imageUrl}) => (
        <Post
          key={id}
          id={id}
          title={title}
          year={year}
          imageUrl={imageUrl}
          label={NOMINATION_LABEL}
        />
      ))}
    </NominationsWrapper>
  );
};

export default Nominations;
