import React from 'react';
import CreateButton from '../CreateButton';
import {
    Container,
    InputRow,
    InputContainer,
    HalfInputContainer,
    InputTitle,
    Input,
} from './style';

// interface IButtonProps {
//     buttonFunction: VoidFunction;
// }

export function NewProduct(
    // { buttonFunction }: IButtonProps
    ) {
    return (
        <Container>
            <InputRow>
                <InputContainer>
                    <InputTitle>Nome do produto</InputTitle>
                    <Input placeholder='Informe o '/>
                </InputContainer>
            </InputRow>

            <InputRow>
                <HalfInputContainer>
                    <InputTitle>Valor unitário</InputTitle>
                    <Input placeholder='Informe o '/>
                </HalfInputContainer>

                <HalfInputContainer>
                    <InputTitle>Qntd. em estoque</InputTitle>
                    <Input placeholder='Informe o '/>
                </HalfInputContainer>
            </InputRow>

            {/* <CreateButton onClick={()=>{}} /> */}
        </Container>
    );
}