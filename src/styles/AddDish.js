import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  margin-left: 20px;
`

export const QuantityBtn = styled.button`
  background-color: transparent;
  border: 0;
  color: #fff;
  font-size: 2.8rem;
  width: 45px;
  height: 45px;
  transition: .15s;
  border: 2px solid ${({theme}) => theme.colors.yellow};
  cursor: pointer;

  :hover,
  :focus {
    background-color: ${({theme}) => theme.colors.yellow};
    color: #000000;
  }
`