import React, { useContext } from 'react';
import { appContext } from '../contexts/Store';

const handleFocus = (event) => {
  event.target.select();
};

const handleSubmit = (event, dispatch) => {
  if (event.key === 'Enter') {
    dispatch({ type: 'SET_SEARCH', payload: event.target.value });
    fetch(`${process.env.GATSBY_API_URL}s=${event.target.value}`)
      .then((response) => response.json())
      .then((resultData) => {
        const error = resultData.Error ? resultData.Error : undefined;
        dispatch({ type: 'SET_ERROR', payload: error });
        if (!error) {
          dispatch({ type: 'SET_POSTS', payload: resultData.Search });
        }
      });
  }
};

const Search = () => {
  const { dispatch } = useContext(appContext);
  return (
    <input
      type="text"
      placeholder="Enter a movie"
      onFocus={handleFocus}
      onKeyDown={(event) => handleSubmit(event, dispatch)}
    />
  );
};

export default Search;
