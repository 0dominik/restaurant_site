import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  margin: 15px 0px;
  touch-action: manipulation;

  @media(max-width: ${({theme}) => theme.media.medium}) {
    margin: 10px 0px;

    Img {
      width: 100px;
      height: 100px;
    }
  }
`

export const Img = styled.img`
  width: 125px;
  height: 125px;
`

export const H3 = styled.h3`
  margin-bottom: 10px;
`

export const Price = styled.p`
  text-align: center;
  font-size: 2rem;
  margin-bottom: -15px;
`

export const SubContainer = styled.div`
  display: flex;
  margin: 5px 0;
`

export const DishAbout = styled.div`
  width: 200px;
  margin: 15px 20px;

  @media(max-width: ${({theme}) => theme.media.medium}) {
    width: 200px;
  }
`