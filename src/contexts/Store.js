import React, { createContext, useReducer } from 'react';
import Reducer, { initialState } from './Reducer';

export const appContext = createContext(initialState);
const { Provider } = appContext;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StateProvider;
