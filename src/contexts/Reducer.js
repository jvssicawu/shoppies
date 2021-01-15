export const initialState = {
  error: undefined,
  nominations: [],
  posts: [],
  search: '',
};

const Reducer = (state, action) => {
  switch (action.type) {
    case 'SET_SEARCH':
      return { ...state, search: action.payload };
    case 'SET_POSTS':
      return { ...state, posts: action.payload };
    case 'SET_ERROR':
      return { ...state, error: action.payload };
    case 'ADD_NOMINATION':
      return { ...state, nominations: [...state.nominations, action.payload] };
    case 'REMOVE_NOMINATION':
      return {
        ...state,
        nominations: state.nominations.filter(
          (nomination) => nomination !== action.payload
        ),
      };
    default:
      return state;
  }
};

export default Reducer;
