import React, { useContext } from 'react';
import styled from 'styled-components';
import {
  searchIconAlt,
  searchIconSrc,
  searchPlaceholder,
  searchTitle,
  SET_ERROR_ACTION,
  SET_POSTS_ACTION,
  SET_SEARCH_ACTION,
} from '../Constants';
import { appContext } from '../contexts/Store';
import SearchWrapper from '../containers/SearchWrapper';

const InputWrapper = styled.div`
  position: relative;
  img {
    position: absolute;
    top: 8px;
    left: 10px;
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
      <h3>{searchTitle}</h3>
      <InputWrapper>
        <input
          type="text"
          placeholder={searchPlaceholder}
          onFocus={handleFocus}
          onKeyDown={(event) => handleSubmit(event, dispatch)}
        />
        <img src={searchIconSrc} alt={searchIconAlt} />
      </InputWrapper>
    </SearchWrapper>
  );
};

export default Search;
