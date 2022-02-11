import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';

export const HomeContainer = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
`;

export const FieldsContainer = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  padding: 0px ${RFValue(8, 812)}px;
`;