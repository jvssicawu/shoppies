import styled from 'styled-components';
import { Device } from '../Constants';

const Content = styled.div`
  background: ${(props) => props.theme.secondaryBackground};
  border-radius: 10px;
  padding: 2em;
  box-sizing: border-box;
  &:not(:last-child) {
    margin-bottom: 2em;
  }
  @media ${Device.tablet} {
    width: 80%;
    &:not(:last-child) {
      margin-bottom: 0;
      margin-right: 2em;
    }
    &.posts,
    &.nominations {
      width: 40%;
      min-height: 300px;
    }
  }
  @media ${Device.laptop} {
    width: 50%;
    &.posts,
    &.nominations {
      width: 25%;
    }
  }
`;

export default Content;
