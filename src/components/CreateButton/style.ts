import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { MaterialIcons } from '@expo/vector-icons';

interface ButtonTypes {
    type: "enabled" | "disabled"
}

export const Container = styled.View<ButtonTypes>`
  width: ${RFValue(56, 812)}px;
  height: ${RFValue(56, 812)}px;
  border-radius: ${RFValue(100, 812)}px;
  background-color: ${({ theme, type }) => type === "enabled" ? theme.colors.secondary : theme.colors.secondary_background};
  border: ${({ theme, type }) => type === "disabled" ? `.1px solid ${theme.colors.terciary}80` : 'none'};
  align-items: center;
  justify-content: center;
`;

export const ButtonIcon = styled(MaterialIcons)<ButtonTypes>`
    font-size: ${RFValue(20, 812)}px;
    color: ${({ theme, type }) => type === "enabled" ? theme.colors.secondary_background : theme.colors.secondary};
`;