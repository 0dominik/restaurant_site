import styled from 'styled-components';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    align-items: center;
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 250px;
  background-color: ${({ theme }) => theme.colors.lightYellow};
  border: 0;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: 1.4rem;
  color: #000000;
  font-weight: 700;
  padding: 10px;
  margin: 5px 0 5px 15px;

  ::placeholder {
    color: #fff;
    font-weight: 400;
  }
`;

export const Label = styled.label`
  display: flex;
  align-items: center;
  margin-top: 10px;

  @media (max-width: ${({ theme }) => theme.media.small}) {
    flex-direction: column;
  }
`;
