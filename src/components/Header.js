import styled from 'styled-components';

export const Title = styled.h1``;

export const SubHeading = styled.h3`
  color: ${(props) => props.theme.secondaryText};
`;

const Header = styled.h2`
  margin-top: 0;
`;

export default Header;
