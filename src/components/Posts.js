import React, { useContext } from 'react';
import styled from 'styled-components';
import { appContext } from '../contexts/Store';
import Post from './Post';

const PostsWrapper = styled.div`
  margin: 2em;
`;

const Posts = () => {
  const { state } = useContext(appContext);
  return (
    <PostsWrapper>
      {state.error ? (
        <p>{`Could not load results for ${state.search}. ${state.error}`}</p>
      ) : (
        state.posts.map(({ imdbID, Title, Year, Poster }) => (
          <Post
            key={imdbID}
            id={imdbID}
            title={Title}
            year={Year}
            imageUrl={Poster}
          />
        ))
      )}
    </PostsWrapper>
  );
};

export default Posts;
