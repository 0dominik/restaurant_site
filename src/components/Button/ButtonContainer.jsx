import React from 'react'
import Button from './Button'
import Quantity from '../Quantity'
import Error from './Error'
import { StyledContainer, QuantityContainer} from '../../styles/ButtonContainer'

const ButtonContainer = ({sum, text, error, handleOnClick}) => {
  return (
    <StyledContainer>
      <Error text={error}/>
      <div>Do zapłaty: 
        <QuantityContainer>
          <Quantity size="large" content={sum}/> PLN
        </QuantityContainer>
      </div>
      <Button type="submit" handleOnClick={handleOnClick} text={text}/>
    </StyledContainer>
  )
}

export default ButtonContainer