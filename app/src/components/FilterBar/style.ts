import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Filter = styled.TouchableOpacity`
flex-direction: row;
  align-items: center;
  justify-content: center;
    border-radius: 50px;
    padding: 4px 8px;
`;

export const FilterName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(14, 812)}px;
  /* background: transparent; */
  color: ${({ theme }) => theme.colors.primary};
`;

export const SelectedIcon = styled(MaterialIcons)`
  font-size: ${RFValue(16, 812)};
  color: ${({ theme }) => theme.colors.secondary_background};
`;

export const FilterIcon = styled(MaterialIcons)`
  font-size: ${RFValue(24, 812)};
  color: ${({ theme }) => theme.colors.primary};
`;