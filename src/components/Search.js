import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  searchPlaceholder,
  SET_ERROR_ACTION,
  SET_POSTS_ACTION,
  SET_SEARCH_ACTION,
} from '../Constants';
import { appContext } from '../contexts/Store';

const SearchWrapper = styled.div`
  padding: 1em;
  input {
    padding: 0.5em;
    padding-left: 1em;
    font-size: 1em;
    font-weight: 400;
    border: solid 2px #a8ccc5;
    border-radius: 30px;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 3pt 1pt #a8ccc5;
  }
  h3 {
    margin: 0.5em;
  }
`;

const handleFocus = (event) => {
  event.target.select();
};

const handleSubmit = (event, dispatch) => {
  if (event.key === 'Enter' && event.target.value !== '') {
    dispatch({ type: SET_SEARCH_ACTION, payload: event.target.value });
    fetch(`${process.env.GATSBY_API_URL}s=${event.target.value}`)
      .then((response) => response.json())
      .then((resultData) => {
        const error = resultData.Error ? resultData.Error : undefined;
        dispatch({ type: SET_ERROR_ACTION, payload: error });
        if (!error) {
          dispatch({ type: SET_POSTS_ACTION, payload: resultData.Search });
        }
      });
  }
};

const Search = () => {
  const { dispatch } = useContext(appContext);
  return (
    <SearchWrapper>
      <h3>Movie Title</h3>
      <input
        type="text"
        placeholder={searchPlaceholder}
        onFocus={handleFocus}
        onKeyDown={(event) => handleSubmit(event, dispatch)}
      />
    </SearchWrapper>
  );
};

export default Search;
