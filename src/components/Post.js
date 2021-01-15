import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Poster = styled.img`
  border-radius: 1em;
  object-fit: cover;
  width: 100px;
  height: 100px;
`;

const Column = styled.div`
  display: block;
`;

const Post = ({ id, title, year, imageUrl }) => (
  <PostWrapper>
    <Poster src={imageUrl} alt="Poster" />
    <Column>
      <h3>{`${title} (${year})`}</h3>
    </Column>
    <Button id={id} />
  </PostWrapper>
);

export default Post;
