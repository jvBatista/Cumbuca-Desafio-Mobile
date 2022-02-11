import React, { Dispatch, SetStateAction } from 'react';
import {
    Container,
    Input,
    InputContainer,
    MaterialInputIcon,
} from './style';
import theme from '../../global/styles/theme';

interface ISearchProps {
    value: string;
    setValue: Dispatch<SetStateAction<string>>;
  }

export function ProductSearchBar(
    { value, setValue }: ISearchProps
) {
    return (
        <Container>
            <InputContainer>
                <Input 
                    placeholder='Pesquisar'
                    placeholderTextColor={`${theme.colors.secondary}80`}
                    value={value}
                    onChangeText={setValue}
                />
            <MaterialInputIcon name="search" /> 
            </InputContainer>
        </Container>
    );
}