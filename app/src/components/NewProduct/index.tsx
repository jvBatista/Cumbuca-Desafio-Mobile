import React, { Dispatch, SetStateAction, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { View, Alert } from 'react-native';
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

interface IProduct {
    name: string;
    productId: number;
    numberOfUnits: number;
    unitValue: number;
}

interface IButtonProps {
    productList: IProduct[];
    setProductList: Dispatch<SetStateAction<IProduct[]>>;
}

export function NewProduct(
    {
        productList,
        setProductList
    }: IButtonProps
) {
    const [productName, setProductName] = useState("");
    const [productNumberOfUnits, setProductNumberOfUnits] = useState("");
    const [productUnitValue, setProductUnitValue] = useState("");

    function findProductId() {
        let id = 1;

        while (typeof productList.find(item => item.productId === id) !== "undefined") id++;
        
        return id;
    }

    const createNewProduct = async () => {
        if (productName && productNumberOfUnits && productUnitValue) {
            if(productNumberOfUnits!=="0"){
                const newList = [...productList];
                newList.push({
                    name: productName,
                    productId: findProductId(),
                    numberOfUnits: parseInt(productNumberOfUnits),
                    unitValue: parseInt(productUnitValue),
                });
                setProductList(newList);
    
                await AsyncStorage.setItem('@cpm_productList', JSON.stringify(newList));
                const list = await AsyncStorage.getItem('@cpm_productList');
    
                Alert.alert(
                    "Produto criado com sucesso",
                    "",
                    [
                        { text: "OK", onPress: () => {
                            setProductName("")
                            setProductNumberOfUnits("")
                            setProductUnitValue("")
                        } }
                    ]
                );
            } else{
                Alert.alert(
                    "Falha na criação do produto",
                    "Valor de quantidade em estoque inválido",
                    [
                        { text: "OK" }
                    ]
                );
            }
        } else {
            Alert.alert(
                "Falha na criação do produto",
                "Preencha todos os campos",
                [
                    { text: "OK" }
                ]
            );
        }
    }

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
                <CreateButton buttonFunction={createNewProduct} isEnabled={productName && productNumberOfUnits && productUnitValue && productNumberOfUnits!=="0" ? true : false} />
            </View>

        </Container>
    );
}