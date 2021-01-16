import React, { useContext } from 'react';
import { NOMINATION_LABEL, noNominationsMsg } from '../Constants';
import Content from '../containers/Content';
import { appContext } from '../contexts/Store';
import Header from './Header';
import Post from './Post';

const Nominations = () => {
  const { state } = useContext(appContext);
  return (
    <Content className="nominations">
      <Header>Nominations</Header>
      {state.nominations.length === 0 && <p>{noNominationsMsg}</p>}
      {state.nominations.map(({ id, title, year, imageUrl }) => (
        <Post
          key={id}
          id={id}
          title={title}
          year={year}
          imageUrl={imageUrl}
          label={NOMINATION_LABEL}
        />
      ))}
    </Content>
  );
};

export default Nominations;
