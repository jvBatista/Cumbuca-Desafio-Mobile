import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
// import { TextInputMask } from 'react-native-masked-text';

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFValue(116, 812)}px;
  border-radius: 5px;
  padding: 0px 8px;
`;

export const InputRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const InputContainer = styled.View`
  /* align-items: space-around; */
  justify-content: flex-start;
  width: 100%;
`;

export const HalfInputContainer = styled(InputContainer)`
  width: 40%;
`;

export const Input = styled.TextInput`
  height: ${RFValue(32, 812)}px;
  width: 80%;
  flex-direction: row;
  justify-content: flex-start;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16, 812)}px;
  background: ${({ theme }) => theme.colors.terciary_background};
  color: ${({ theme }) => theme.colors.terciary};
  border-radius: 5px;
  padding: 4px 8px;
`;

export const InputTitle = styled.Text`
  color: ${({ theme }) => theme.colors.terciary};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12, 812)}px;
  margin-left: 8px;
`;