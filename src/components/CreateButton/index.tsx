import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  Container,
  ButtonIcon,
} from './style';

interface IButtonProps {
  buttonFunction: VoidFunction;
  isEnabled: boolean;
}

export function CreateButton({ buttonFunction, isEnabled }: IButtonProps) {
  return (
    <TouchableOpacity onPress={buttonFunction}>
      <Container type={isEnabled ? "enabled" : "disabled"}>
        <ButtonIcon type={isEnabled ? "enabled" : "disabled"} name="add" />
      </Container>
    </TouchableOpacity>
  );
}