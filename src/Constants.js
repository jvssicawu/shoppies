export const DEFAULT_LABEL = 'Nominate';
export const NOMINATION_LABEL = 'Remove';

export const fallBackImgSrc = 'assets/fallbackImage.jpg';
export const searchIconSrc = 'assets/searchIcon.svg';

export const MAX_NOMINATIONS = 5;

// classNames / attributes
export const DISABLED = 'disabled';
export const ACTIVE = 'active';
export const REMOVE = 'remove';
export const SUCCESS = 'success';
export const searchIconAlt = 'search-icon';

// actions
export const HIDE_BANNER_ACTION = 'HIDE_BANNER';
export const SET_ERROR_ACTION = 'SET_ERROR';
export const SET_POSTS_ACTION = 'SET_POSTS';
export const SET_SEARCH_ACTION = 'SET_SEARCH';
export const ADD_NOMINATION_ACTION = 'ADD_NOMINATION';
export const REMOVE_NOMINATION_ACTION = 'REMOVE_NOMINATION';

// text
export const title = 'The Shoppies';
export const searchTitle = 'Movie Title';
export const description =
  'Search for your top 5 favourite movies to nominate for the awards!';
export const searchPlaceholder = 'Enter a movie';
export const bannerSuccessMsg = 'Successfully added all nominations!';
export const resultsPrefixErrorMsg = 'Could not load results for';
export const resultsTryAgainMsg = 'Try searching for something else! :)';
export const beginSearchMsg =
  'Enter a movie title in the search bar above to get started!';
export const noNominationsMsg = "You haven't nominated any movies.";

export const theme = {
  primaryBackground: '#F2F5F7',
  secondaryBackground: '#FFFFFF',
  buttonText: '#FFFFFF',
  primaryButtonTop: '#558999',
  primaryButtonBottom: '#A8CCC5',
  disabledButtonTop: '#9F9F9F',
  disabledButtonBottom: '#CECECE',
  primaryText: '#000000',
  secondaryText: '#558999',
  searchBar: '#A8CCC5',
  removeButtonTop: '#C74343',
  removeButtonBottom: '#CCA8A8',
};

const size = {
  mobile: '425px',
  tablet: '768px',
  laptop: '1024px',
};

export const Device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
};
