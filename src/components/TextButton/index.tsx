import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  ButtonText,
} from './style';

interface IButtonProps {
  buttonFunction: VoidFunction;
  text: string;
}

export function TextButton({ buttonFunction, text }: IButtonProps) {
  return (
    <TouchableOpacity onPress={buttonFunction}>
        <ButtonText>{text.toUpperCase()}</ButtonText>
    </TouchableOpacity>
  );
}