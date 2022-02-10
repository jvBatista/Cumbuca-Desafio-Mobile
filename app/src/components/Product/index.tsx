import React from 'react';
import {
    Container,
    TitleContainer,
    ProductName,
    AtributesContainer,
    Atribute,
    AtributeName,
    AtributeValue
} from './style';

// interface IProductProps {
//     name: string;
//     productId: string;
//     numberOfUnits: number;
//     unitValue: number;
// }

export function Product(
//     {
//     name,
//     productId,
//     numberOfUnits,
//     unitValue,
// }: IProductProps
) {
    const name = "Nome do produto";
    const productId = 2;
    const numberOfUnits = 500;
    const unitValue = 5.99;

    return (
        <Container>
            <TitleContainer>
                <ProductName>{name}</ProductName>
                <AtributeName>{`id ${productId}`}</AtributeName>
            </TitleContainer>

            <AtributesContainer>
                <Atribute>
                    <AtributeName>Valor unitário</AtributeName>
                    <AtributeValue>{`R$ ${unitValue}`}</AtributeValue>
                </Atribute>

                <Atribute>
                    <AtributeName>Em estoque</AtributeName>
                    <AtributeValue>{`${numberOfUnits} un.`}</AtributeValue>
                </Atribute>

                <Atribute>
                    <AtributeName>Valor total</AtributeName>
                    <AtributeValue>{`R$ ${unitValue * numberOfUnits}`}</AtributeValue>
                </Atribute>
            </AtributesContainer>
        </Container>
    );
}