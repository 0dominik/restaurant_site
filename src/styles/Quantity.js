import styled from 'styled-components';

export const StyledQuantity = styled.span`
  display: inline-block;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${({theme}) => theme.colors.yellow};
  font-size: 2rem;
  text-align: center;
  min-width: ${({size}) => size === 'large' ? '56px' : '45px'};
  height: 45px;
  cursor: default;
  color: #000000;
`