import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';
// import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: ${RFValue(90, 812)}px;
  padding: 0px 16px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.terciary_background};
  width: 100%;
  padding: 4px 16px;
  border-radius: 50px;
`;

export const Input = styled.TextInput`
  height: ${RFValue(32, 812)}px;
  width: 80%;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16, 812)}px;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
`;

export const MaterialInputIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 812)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;