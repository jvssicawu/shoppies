import React, { useContext } from 'react';
import {
  DEFAULT_LABEL,
  beginSearchMsg,
  resultsPrefixErrorMsg,
  resultsTryAgainMsg,
} from '../Constants';
import { appContext } from '../contexts/Store';
import Content from '../containers/Content';
import Header from './Header';
import Post from './Post';

const Posts = () => {
  const { state } = useContext(appContext);
  return (
    <Content className="posts">
      <Header>Search Results</Header>
      {state.posts.length === 0 && !state.error && <p>{beginSearchMsg}</p>}
      {state.error ? (
        <p>{`${resultsPrefixErrorMsg} "${state.search}". ${state.error} ${resultsTryAgainMsg}`}</p>
      ) : (
        state.posts.map(({ imdbID, Title, Year, Poster }) => (
          <Post
            key={imdbID}
            id={imdbID}
            title={Title}
            year={Year}
            imageUrl={Poster}
            label={DEFAULT_LABEL}
          />
        ))
      )}
    </Content>
  );
};

export default Posts;
