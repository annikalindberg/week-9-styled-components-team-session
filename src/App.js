import React from 'react'
import Header from 'components/header'
import Hero from 'components/Hero'
import { FormComponent, InputComponent, ButtonComponent } from './components/Form';
/* import GlobalStyle from 'components/GlobalStyle' */

export const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };
  return (
    <>
      <Header />
      <Hero />
      <FormComponent onSubmit={handleSubmit}>
        <InputComponent type="text" placeholder="Username" active />
        <InputComponent type="email" placeholder="Email" filled={false} />
        <InputComponent type="password" placeholder="Password" errors={false} />
        <ButtonComponent type="submit" disabled={false}>
          Submit
        </ButtonComponent>
      </FormComponent>
    </>
  )
}
