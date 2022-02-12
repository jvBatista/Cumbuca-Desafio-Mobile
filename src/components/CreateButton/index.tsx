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
      <Container type={isEnabled ? "enabled" : "disabled"}
        style={{
          shadowColor: "#000000",
          shadowOffset: {
            width: 0,
            height: 4,
          },
          shadowOpacity: .3,
          shadowRadius: 5
        }}
      >
        <ButtonIcon type={isEnabled ? "enabled" : "disabled"} name="add" />
      </Container>
    </TouchableOpacity>
  );
}