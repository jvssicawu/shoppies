import React, { useContext } from 'react';
import {
  ACTIVE,
  ADD_NOMINATION_ACTION,
  DISABLED,
  MAX_NOMINATIONS,
  NOMINATION_LABEL,
  REMOVE,
  REMOVE_NOMINATION_ACTION,
} from '../Constants';
import { appContext } from '../contexts/Store';
import ButtonWrapper from '../containers/ButtonWrapper';

const handleNomination = (nominee, state, dispatch) => {
  const { id: nid } = nominee;
  const isNominated = state.nominations.some(({ id }) => id === nid)
  || state.nominations.length === MAX_NOMINATIONS;
  if (!isNominated) {
    dispatch({ type: ADD_NOMINATION_ACTION, payload: nominee });
  } else {
    dispatch({ type: REMOVE_NOMINATION_ACTION, payload: nominee });
  }
};

const getClassName = (nominee, state, label) => {
  const { id: nid } = nominee;
  const isDisabled = state.nominations.some(({ id }) => id === nid)
    || state.nominations.length === MAX_NOMINATIONS;
  const activeTag = isDisabled ? DISABLED : ACTIVE;
  return label === NOMINATION_LABEL ? REMOVE : activeTag;
};

const Button = ({ nominee, label }) => {
  const { state, dispatch } = useContext(appContext);
  return (
    <ButtonWrapper
      className={getClassName(nominee, state, label)}
      onClick={() => handleNomination(nominee, state, dispatch)}
    >
      {label}
    </ButtonWrapper>
  );
};

export default Button;
