import React from 'react';
import ButtonContainer from '../Button/ButtonContainer';
import Error from '../Button/Error';
import { StyledForm, Input, Label } from '../../styles/Form';
import { useForm } from 'react-hook-form';

const Form = ({ sum, showOrdered }) => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    showOrdered();
  };

  const errorMessages = {
    address: 'Nieprawidłowy adres',
    town: 'Nieprawidłowa miejscowość',
    phone: 'Nieprawidłowy numer telefonu',
    name: 'Nieprawidłowe imię',
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} action=''>
      {errors.address && <Error isStatic text={errorMessages.address} />}
      {errors.town && <Error isStatic text={errorMessages.town} />}
      {errors.phone && <Error isStatic text={errorMessages.phone} />}
      {errors.name && <Error isStatic text={errorMessages.name} />}
      <Label htmlFor='address'>
        Adres
        <Input ref={register({ minLength: 5 })} id='address' name='address' type='text' placeholder='ulica, nr domu...' required />
      </Label>
      <Label htmlFor='town'>
        Miejscowość
        <Input ref={register({ minLength: 2 })} id='town' name='town' type='text' placeholder='miejscowość...' required />
      </Label>
      <Label htmlFor='phone'>
        Nr telefonu
        <Input ref={register({ minLength: 9, maxLength: 12 })} id='phone' name='phone' type='tel' placeholder='nr telefonu...' required />
      </Label>
      <Label htmlFor='name'>
        Imię i nazwisko
        <Input ref={register({ minLength: 3 })} id='name' name='name' type='text' placeholder='imię i nazwisko...' required />
      </Label>
      <ButtonContainer text={'Potwierdź'} sum={sum} />
    </StyledForm>
  );
};

export default Form;
