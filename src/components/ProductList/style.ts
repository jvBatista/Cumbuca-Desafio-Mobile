import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  align-items: center;
  justify-content: flex-start;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFValue(560, 812)}px;
  border-radius: 5px;
  padding: 0px ${RFValue(8, 812)}px;
  border: .5px solid ${({ theme }) => theme.colors.terciary+'25'};
`;

export const LoadingContainer = styled.View`
  width: 100%;
  height: 90%;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.View`
  width: ${RFValue(100, 812)}px;
  height: ${RFValue(100, 812)}px;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(500, 812)}px;
  background: ${({ theme }) => theme.colors.secondary};
  margin-bottom: ${RFValue(8, 812)}px;
  margin-top: ${RFValue(32, 812)}px;
`;

export const SearchIcon = styled(MaterialIcons)`
  font-size: ${RFValue(80, 812)}px;
  color: ${({ theme }) => theme.colors.secondary_background};
`;

export const NotFoundTitle = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(16, 812)}px;
  color: ${({ theme }) => theme.colors.primary};
  width: 75%;
  margin: ${RFValue(8, 812)}px 0px;
`;

export const NotFoundMessage = styled(NotFoundTitle)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12, 812)}px;
`;