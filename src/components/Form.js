/* eslint-disable max-len */
import styled, { css } from 'styled-components';
import React from 'react';

// Styled component for the form element
const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the input fields
const Input = styled.input`
font-s
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;

  ${({ active }) => active
        && css`
      border-color: blue;
      box-shadow: 0 0 5px blue;
    `}

  ${({ filled }) => filled
        && css`
      border-color: green;
      box-shadow: 0 0 5px green;
    `}

  ${({ errors }) => errors
        && css`
      border-color: red;
      box-shadow: 0 0 5px red;
    `}
`;

// Styled component for the submit button
const Button = styled.button`
  padding: 10px;
  background-color: blue;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: darkblue;
  }

  ${({ disabled }) => disabled
        && css`
      opacity: 0.5;
      cursor: not-allowed;
    `}
`;

// Form component that combines the above styled-components and renders the form
const FormComponent = ({ onSubmit, children }) => {
  return <Form onSubmit={onSubmit}>{children}</Form>;
};

// Input component that renders a single input field
const InputComponent = ({ type, placeholder, active, filled, errors }) => {
  return <Input type={type} placeholder={placeholder} active={active} filled={filled} errors={errors} />;
};

// Button component that renders a single button
const ButtonComponent = ({ type, disabled, children }) => {
  return (
    <Button type={type} disabled={disabled}>
      {children}
    </Button>
  );
};

export { FormComponent, InputComponent, ButtonComponent };
