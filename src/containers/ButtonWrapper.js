import styled from 'styled-components';

const ButtonWrapper = styled.div`
  background-image: linear-gradient(
    to right,
    ${(props) => props.theme.primaryButtonTop},
    ${(props) => props.theme.primaryButtonBottom}
  );
  border: none;
  border-radius: 1.5em;
  color: ${(props) => props.theme.buttonText};
  font-weight: 300;
  padding: 0.5em;
  max-width: 5em;
  text-align: center;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
  &:hover {
    -webkit-transform: translateY(-4px);
    -moz-transform: translateY(-4px);
    -o-transform: translateY(-4px);
    transform: translateY(-4px);
    cursor: pointer;
  }
  &.disabled {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.disabledButtonTop},
      ${(props) => props.theme.disabledButtonBottom}
    );
    pointer-events: none;
  }
  &.remove {
    background-image: linear-gradient(
      to right,
      ${(props) => props.theme.removeButtonTop},
      ${(props) => props.theme.removeButtonBottom}
    );
  }
  &.remove:hover {
    -webkit-transform: translateY(-4px);
    -moz-transform: translateY(-4px);
    -o-transform: translateY(-4px);
    transform: translateY(-4px);
    cursor: pointer;
  }
`;

export default ButtonWrapper;
