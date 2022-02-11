import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { FlatList } from 'react-native-gesture-handler';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFValue(560, 812)}px;
  border-radius: 5px;
  padding: 0px 8px;
  border: .5px solid ${({ theme }) => theme.colors.terciary+'25'};
`;

export const ItemsList = styled(FlatList)`
  width: 100%;
`;

export const LoadingContainer = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;