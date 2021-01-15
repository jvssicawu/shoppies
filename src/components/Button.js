import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { appContext } from '../contexts/Store';

const ButtonWrapper = styled.div`
  background: #558999;
  border: none;
  border-radius: 1.5em;
  padding: 0.8em;
  margin: 1em;
  &:hover {
    background: #a8ccc5;
    cursor: pointer;
  }
  &.disabled {
    background: #9f9f9f;
    pointer-events: none;
  }
`;

const handleClick = (id, isNominated, setIsNominated, dispatch) => {
  if (!isNominated) {
    dispatch({ type: 'ADD_NOMINATION', payload: id });
  } else {
    dispatch({ type: 'REMOVE_NOMINATION', payload: id });
  }
  setIsNominated(!isNominated);
};

const Button = ({ id }) => {
  const { state, dispatch } = useContext(appContext);
  const [isNominated, setIsNominated] = useState(
    state.nominations.includes(id)
  );
  const label = 'Nominate';
  const className = isNominated ? 'disabled' : 'active';
  return (
    <ButtonWrapper
      className={className}
      onClick={() => handleClick(id, isNominated, setIsNominated, dispatch)}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
