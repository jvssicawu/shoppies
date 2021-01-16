import React from 'react';
import styled from 'styled-components';
import { fallBackImgSrc } from '../Constants';
import Button from './Button';
import { SubHeading } from './Header';

const PostWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 1em;
`;

const Poster = styled.img`
  border-radius: 1em;
  object-fit: cover;
  width: 64px;
  height: 64px;
  margin-right: 1em;
`;

const Column = styled.div`
  display: block;
  h3 {
    margin: 0;
    margin-bottom: 0.5em;
  }
`;

const addFallbackImage = (e) => {
  e.onError = null;
  e.target.src = fallBackImgSrc;
};

const Post = ({ id, title, year, imageUrl, label }) => (
  <PostWrapper>
    <Poster src={imageUrl} alt="Poster" onError={addFallbackImage} />
    <Column>
      <SubHeading>{`${title} (${year})`}</SubHeading>
      <Button nominee={{ id, title, year, imageUrl }} label={label} />
    </Column>
  </PostWrapper>
);

export default Post;
