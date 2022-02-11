import React, { Dispatch, SetStateAction } from 'react';
import { View } from 'react-native';
import theme from '../../global/styles/theme';
import { CreateButton } from '../CreateButton';
import {
    Container,
    InputRow,
    InputContainer,
    HalfInputContainer,
    InputTitle,
    Input,
} from './style';

interface IButtonProps {
    productName: string;
    productNumberOfUnits: string;
    productUnitValue: string;
    setProductName: Dispatch<SetStateAction<string>>;
    setProductNumberOfUnits: Dispatch<SetStateAction<string>>;
    setProductUnitValue: Dispatch<SetStateAction<string>>;
    createFunction: VoidFunction;
}

export function NewProduct(
    {
        productName,
        productNumberOfUnits,
        productUnitValue,
        setProductName,
        setProductNumberOfUnits,
        setProductUnitValue,
        createFunction
    }: IButtonProps
) {
    return (
        <Container>
            <InputRow>
                <InputContainer>
                    <InputTitle>Nome do produto</InputTitle>
                    <Input
                        value={productName}
                        onChangeText={setProductName}
                        placeholder='Informe o nome do produto'
                        placeholderTextColor={`${theme.colors.secondary}66`}
                    />
                </InputContainer>
            </InputRow>

            <InputRow>
                <HalfInputContainer>
                    <InputTitle>Valor unitário</InputTitle>
                    <Input
                        value={productUnitValue}
                        onChangeText={setProductUnitValue}
                        placeholder='00.00'
                        placeholderTextColor={`${theme.colors.secondary}66`}
                        keyboardType="numeric"
                        numberOfLines={1}
                    />
                </HalfInputContainer>

                <HalfInputContainer>
                    <InputTitle>Qntd. em estoque</InputTitle>
                    <Input
                        value={productNumberOfUnits}
                        onChangeText={setProductNumberOfUnits}
                        placeholder='000'
                        placeholderTextColor={`${theme.colors.secondary}66`}
                        keyboardType="numeric"
                        numberOfLines={1}
                    />
                </HalfInputContainer>
            </InputRow>

            <View style={{ position: 'absolute', right: 16, bottom: -25, elevation: 5 }}>
                <CreateButton buttonFunction={() => { }} isEnabled={productName&&productNumberOfUnits&&productUnitValue ? true : false} />
            </View>

        </Container>
    );
}