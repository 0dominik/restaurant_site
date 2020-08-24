import React from 'react'
import Button from '../Button/Button'
import { Container, H2, WaitTime } from '../../styles/OrderedView'


const OrderedView = ({backToMenu}) => {
  return (
    <Container>
      <H2>Zamówienie zostało złożone<br/>
        Życzymy smacznego</H2>
      <WaitTime>Czas oczekiwania: 30 minut</WaitTime>
      <Button handleOnClick={backToMenu} text={"Wróć do menu"}/>
    </Container>
  )
}

export default OrderedView