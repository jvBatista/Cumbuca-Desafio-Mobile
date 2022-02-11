import React, { Dispatch, SetStateAction, useState } from 'react';
import { Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import theme from '../../global/styles/theme';
import {
    Container,
    TopRow,
    TitleContainer,
    ProductName,
    AtributesContainer,
    Atribute,
    AtributeName,
    AtributeValue,
    Input,
    DropIcon,
    ButtonsRow,
} from './style';
import { TextButton } from '../../components/TextButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProduct {
    name: string;
    productId: number;
    numberOfUnits: number;
    unitValue: number;
}

interface IProductProps {
    product: IProduct;
    productList: IProduct[];
    setProductList: Dispatch<SetStateAction<IProduct[]>>;
}

export function Product(
    {
        product,
        productList,
        setProductList,
    }: IProductProps
) {
    const [isOpen, setIsOpen] = useState(false);
    // const [productName, setProductName] = useState(name);
    const [productNumberOfUnits, setProductNumberOfUnits] = useState(JSON.stringify(product.numberOfUnits));
    const [productUnitValue, setProductUnitValue] = useState(JSON.stringify(product.unitValue));

    function handleOpenProduct() {
        if (isOpen && (productNumberOfUnits !== JSON.stringify(product.numberOfUnits) || productUnitValue !== JSON.stringify(product.unitValue))) {
            Alert.alert(
                "Deseja descartar as alterações?",
                "",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Descartar", onPress: () => {
                            setProductNumberOfUnits(JSON.stringify(product.numberOfUnits))
                            setProductUnitValue(JSON.stringify(product.unitValue))
                            setIsOpen(!isOpen);
                        }
                    }
                ]
            );
        } else setIsOpen(!isOpen);
    }

    const deleteProduct = async () => {
        const newList = [...productList];
        const index = newList.indexOf(product);
        if (index > -1) newList.splice(newList.indexOf(product), 1);

        setProductList(newList);
        await AsyncStorage.setItem('@cpm_productList', JSON.stringify(newList));
        console.log(productList);
    }

    function saveProduct() {
        if (productNumberOfUnits && productUnitValue && productNumberOfUnits === "0") {
            Alert.alert(
                "Deseja deletar o produto?",
                "O produto será deletado se a quantidade em estoque for 0",
                [
                    {
                        text: "Cancelar",
                        style: "cancel"
                    },
                    {
                        text: "Deletar", onPress: () => { deleteProduct() }
                    }
                ]
            );
        } else if (productNumberOfUnits && productUnitValue) {
            const newProduct = productList.find(item => item.productId === product.productId);
            if (newProduct) {

                Alert.alert(
                    "Deseja salvar as alterações?",
                    "",
                    [
                        {
                            text: "Cancelar",
                            style: "cancel"
                        },
                        {
                            text: "Salvar", onPress: async () => {
                                newProduct.numberOfUnits = parseInt(productNumberOfUnits);
                                newProduct.unitValue = parseFloat(productUnitValue);

                                const newList = [...productList];
                                newList[newList.indexOf(product)] = newProduct;

                                setProductList(newList);
                                await AsyncStorage.setItem('@cpm_productList', JSON.stringify(newList));
                                setIsOpen(!isOpen);
                            }
                        }
                    ]
                );
            } else console.log("nenhum produto encontrado");

        } else {
            Alert.alert(
                "Falha ao salvar mudanças",
                "Todos os campos devem ser preenchidos",
                [
                    {
                        text: "Ok",
                    }
                ]
            );
        }
    }

    return (
        <Container
            opened={isOpen}
        >
            <TopRow>
                <TitleContainer>
                    <ProductName>{product.name}</ProductName>
                    <AtributeName>{`id ${product.productId}`}</AtributeName>
                </TitleContainer>

                <TouchableOpacity onPress={handleOpenProduct}>
                    <DropIcon name={isOpen ? "keyboard-arrow-up" : "keyboard-arrow-down"} />
                </TouchableOpacity>
            </TopRow>

            <AtributesContainer opened={isOpen}>
                <Atribute opened={isOpen}>
                    <AtributeName>Valor unitário</AtributeName>
                    {
                        isOpen ? (
                            <Input
                                value={productUnitValue}
                                onChangeText={setProductUnitValue}
                                placeholder='00.00'
                                placeholderTextColor={`${theme.colors.secondary}66`}
                                keyboardType="numeric"
                            />
                        ) : (
                            <AtributeValue>{`R$ ${product.unitValue.toFixed(2)}`}</AtributeValue>
                        )
                    }
                </Atribute>

                <Atribute opened={isOpen}>
                    <AtributeName>Em estoque</AtributeName>
                    {
                        isOpen ? (
                            <Input
                                value={productNumberOfUnits}
                                onChangeText={setProductNumberOfUnits}
                                placeholder='000'
                                placeholderTextColor={`${theme.colors.secondary}66`}
                                keyboardType="numeric"
                            />
                        ) : (
                            <AtributeValue>{`${product.numberOfUnits} un.`}</AtributeValue>
                        )
                    }
                </Atribute>

                <Atribute opened={isOpen}>
                    <AtributeName>Valor total</AtributeName>
                    <AtributeValue>{`R$ ${(productUnitValue&&productNumberOfUnits) ? `${(parseFloat(productUnitValue) * parseInt(productNumberOfUnits)).toFixed(2)}` :  ""}`}</AtributeValue>
                </Atribute>
            </AtributesContainer>

            {
                isOpen ? (
                    <ButtonsRow>
                        <TextButton text="deletar" buttonFunction={() => {
                            Alert.alert(
                                "Deseja deletar o produto?",
                                "",
                                [
                                    {
                                        text: "Cancelar",
                                        style: "cancel"
                                    },
                                    {
                                        text: "Deletar", onPress: () => { deleteProduct() }
                                    }
                                ]
                            );
                        }} />
                        <TextButton text="salvar" buttonFunction={saveProduct} />
                    </ButtonsRow>
                ) : (
                    null
                )
            }
        </Container>
    );
}