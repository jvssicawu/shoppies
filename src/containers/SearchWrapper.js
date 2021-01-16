import styled from 'styled-components';
import Content from './Content';

const SearchWrapper = styled(Content)`
  margin: auto;
  input {
    padding: 0.5em 0.5em 0.5em 2.5em;
    box-sizing: border-box;
    font-size: 1em;
    font-weight: 400;
    border: solid 2px ${(props) => props.theme.searchBar};
    border-radius: 30px;
    width: 100%;
  }
  input:focus {
    outline: none;
    box-shadow: 0 0 3pt 1pt ${(props) => props.theme.searchBar};
  }
  h3 {
    margin: 0.5em;
  }
`;

export default SearchWrapper;
