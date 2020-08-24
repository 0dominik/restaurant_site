import styled from 'styled-components';
import { StyledButton } from './Button'

export const StyledBackBtn = styled(StyledButton)`
  width: auto;
  height: auto;
  padding: 8px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: .75;
  z-index: 5;

  :hover,
  :focus {
    opacity: 1;
    transform: translateY(0);
  }
`