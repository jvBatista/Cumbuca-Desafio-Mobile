import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: flex-start;
  justify-content: space-around;
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: ${RFValue(96, 812)}px;
  border-radius: 5px;
  padding: 16px;
`;

export const TitleContainer = styled.View`
flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 16px;
`;

export const ProductName = styled.Text`
font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16, 812)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const AtributeName = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10, 812)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AtributesContainer = styled.View`
flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
`;

export const Atribute = styled.View`
  align-items: center;
  justify-content: space-around;
`;

export const AtributeValue = styled(ProductName)`
  font-size: ${RFValue(14, 812)}px;
`;