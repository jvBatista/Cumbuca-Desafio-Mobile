import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14, 812)}px;
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4px 8px;
`;