import styled from 'styled-components';
import { Device } from '../Constants';

const Container = styled.div`
  display: block;
  margin: 2em;
  @media ${Device.tablet} {
    display: flex;
    justify-content: center;
  }
`;

export default Container;
