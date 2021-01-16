import {
  SET_ERROR_ACTION,
  SET_POSTS_ACTION,
  SET_SEARCH_ACTION,
  ADD_NOMINATION_ACTION,
  REMOVE_NOMINATION_ACTION,
  HIDE_BANNER_ACTION,
} from '../Constants';

export const initialState = {
  error: undefined,
  nominations: [],
  posts: [],
  search: '',
  showBanner: false,
};

const MAX_NOMINATIONS = 5;

const Reducer = (state, action) => {
  switch (action.type) {
    case SET_SEARCH_ACTION:
      return { ...state, search: action.payload };
    case SET_POSTS_ACTION:
      return { ...state, posts: action.payload };
    case SET_ERROR_ACTION:
      return { ...state, error: action.payload };
    case ADD_NOMINATION_ACTION:
      if (!state.nominations.some(({ id }) => id === action.payload.id)) {
        return {
          ...state,
          showBanner: state.nominations.length + 1 === MAX_NOMINATIONS,
          nominations: [...state.nominations, action.payload],
        };
      }
      return state;
    case REMOVE_NOMINATION_ACTION:
      return {
        ...state,
        showBanner: state.nominations.length - 1 === MAX_NOMINATIONS,
        nominations: state.nominations.filter(
          ({ id }) => id !== action.payload.id,
        ),
      };
    case HIDE_BANNER_ACTION:
      return {
        ...state,
        showBanner: false,
      };
    default:
      return state;
  }
};

export default Reducer;
