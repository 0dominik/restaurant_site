import styled from 'styled-components';

export const StyledError = styled.p`
  display: ${({ vis }) => (vis ? 'block' : 'none')};
  background-color: ${({ theme }) => theme.colors.error};
  box-sizing: border-box;
  padding: 5px;
  position: absolute;
  top: -35px;
  left: 50%;
  transform: translateX(-50%);
  min-width: 251px;

  ${({ isStatic }) =>
    isStatic
      ? `
  position: static;
  transform: translateX(0);
  `
      : 'position: absolute'}
`;
