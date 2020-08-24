import styled from 'styled-components';

export const StyledButton = styled.button`
  background-color: ${({theme}) => theme.colors.yellow};
  width: 175px;
  height: 45px;
  font-family: ${({theme}) => theme.fonts.main}, sans-serif;
  border: 0;
  font-size: 1.8rem;
  font-weight: 500;
  transition: .15s;
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({theme}) => theme.colors.hoverYellow};
    transform: translateY(2px);
  }
`;