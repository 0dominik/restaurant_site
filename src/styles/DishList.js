import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  overflow-y: auto;
  max-width: 1275px;
  max-height: 100%;
  margin-bottom: 25px;
  position: relative;
  padding: 0 20px;
  
  @media(min-width:  ${({theme}) => theme.media.large}) {
    ${({dishes}) => dishes.length === 2 ? 'width: 1275px' : null};

    ::before {
      content: '';
      width: ${({dishes}) => dishes.length > 1 ? '4px' : '0px'};
      height: ${({dishes}) => dishes.length % 2 === 0 ? (dishes.length*155)/2 : (dishes.length+1)*155/2}px;
      background-color: ${({theme}) => theme.colors.yellow};
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
  }

  @media(max-width: ${({theme}) => theme.media.large}) {
    display: block;
  }

  @media(max-width: ${({theme}) => theme.media.medium}) {
    max-height: none;
    height: auto;
  }

  @media(max-width: ${({theme}) => theme.media.small}) {
    text-align: center; 
  }
`