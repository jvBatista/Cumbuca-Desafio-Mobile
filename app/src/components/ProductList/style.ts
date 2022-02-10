import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFValue(560, 812)}px;
  border-radius: 5px;
  padding: 0px 8px;
`;