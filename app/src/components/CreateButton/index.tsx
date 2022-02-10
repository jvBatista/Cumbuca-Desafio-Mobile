import React from 'react';
import {
  Container,
  ButtonIcon,
} from './style';

interface IButtonProps {
    buttonFunction: VoidFunction;
}

export function CreateButton({buttonFunction}:IButtonProps) {
  return (
    <Container onClick={buttonFunction}>
      <ButtonIcon name="add" />
    </Container>
  );
}