import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  DEFAULT_LABEL,
  beginSearchMsg,
  resultsPrefixErrorMsg,
  resultsTryAgainMsg,
} from '../Constants';
import { appContext } from '../contexts/Store';
import Header from './Header';
import Post from './Post';

const PostsWrapper = styled.div`
  margin: 2em;
  width: 50%;
`;

const Posts = () => {
  const { state } = useContext(appContext);
  return (
    <PostsWrapper>
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
    </PostsWrapper>
  );
};

export default Posts;
