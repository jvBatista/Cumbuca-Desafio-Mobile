import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

interface ContainerTypes {
  opened: boolean;
}

export const Container = styled.View<ContainerTypes>`
  align-items: flex-start;
  justify-content: ${({ opened }) => opened ? "flex-start" : "space-around"};
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  height: auto;
  border-radius: 5px;
  padding: 16px;
  margin-bottom: 8px;
  border: .5px solid ${({ theme }) => theme.colors.terciary+'25'};
`;

export const TopRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

export const TitleContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`;

export const ProductName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(16, 812)}px;
  color: ${({ theme }) => theme.colors.primary};
  margin-right: 4px;
`;

export const AtributeName = styled.Text`
font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(10, 812)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const AtributesContainer = styled.View<ContainerTypes>`
  flex-direction: ${({ opened }) => opened ? "column" : "row"};
  align-items: ${({ opened }) => opened ? "flex-start" : "center"};
  justify-content: ${({ opened }) => opened ? "space-around" : "space-between"};
  width: 90%;
`;

export const Atribute = styled.View<ContainerTypes>`
  flex-direction: ${({ opened }) => opened ? "row" : "column"};
  margin-bottom: ${({ opened }) => opened ? "16px" : "0px"};
  align-items: ${({ opened }) => opened ? "center" : "flex-start"};
  justify-content: ${({ opened }) => opened ? "space-between" : "space-around"};
  width: ${({ opened }) => opened ? "100%" : "auto"};
`;

export const AtributeValue = styled(ProductName)`
  font-size: ${RFValue(14, 812)}px;
  margin: 0px;
`;

export const Input = styled.TextInput`
  height: ${RFValue(32, 812)}px;
  width: ${RFValue(100, 812)}px;
  flex-direction: row;
  justify-content: flex-end;
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14, 812)}px;
  background: ${({ theme }) => theme.colors.terciary_background};
  color: ${({ theme }) => theme.colors.terciary};
  border-radius: 5px;
  padding: 4px 8px;
`;

export const DropIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 812)}px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const ButtonsRow = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  /* margin-bottom: 8px; */
`;
