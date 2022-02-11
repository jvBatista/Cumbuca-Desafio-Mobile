import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

interface FilterTypes {
  type: "selected" | "unselected"
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  margin: ${RFValue(8, 812)}px 0px;
`;

export const Filter = styled.TouchableOpacity<FilterTypes>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: ${RFValue(50, 812)}px;
  padding: ${RFValue(4, 812)}px ${RFValue(8, 812)}px;
  background-color: ${({ theme, type }) => type === "selected" ? theme.colors.primary : 'transparent'};
`;

export const FilterName = styled.Text<FilterTypes>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14, 812)}px;
  color: ${({ theme, type }) => type === "selected" ? theme.colors.secondary_background : theme.colors.primary};
`;

export const SelectedIcon = styled(MaterialIcons)`
  padding-right: 4px; 
  font-size: ${RFValue(16, 812)}px;
  color: ${({ theme }) => theme.colors.secondary_background};
`;

export const FilterIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 812)}px;
  color: ${({ theme }) => theme.colors.primary};
`;