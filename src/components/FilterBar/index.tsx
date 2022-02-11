import React, { Dispatch, SetStateAction, useState } from 'react';
import {
    Container,
    Filter,
    FilterName,
    SelectedIcon,
    FilterIcon
} from './style';

interface IButtonProps {
    setFilter: Dispatch<SetStateAction<string>>;
}

export function FilterBar(
    { setFilter }: IButtonProps
) {
    const [selectedFilter, setSelectedFilter] = useState("nome");

    return (
        <Container>
            <Filter
                delayPressIn={0}
                type={selectedFilter === 'nome' ? 'selected' : 'unselected'}
                onPress={() => {
                    setSelectedFilter("nome")
                    setFilter("nome")
                }}
            >
                {
                    selectedFilter === "nome" ? <SelectedIcon name="check" /> : null
                }
                <FilterName
                    type={selectedFilter === 'nome' ? 'selected' : 'unselected'}
                >Nome</FilterName>
            </Filter>

            <Filter
                delayPressIn={0}
                type={selectedFilter === 'estoque' ? 'selected' : 'unselected'}
                onPress={() => {
                    setSelectedFilter("estoque")
                    setFilter("estoque")
                }}
            >
                {
                    selectedFilter === "estoque" ? <SelectedIcon name="check" /> : null
                }
                <FilterName
                    type={selectedFilter === 'estoque' ? 'selected' : 'unselected'}
                >Estoque</FilterName>
            </Filter>

            <Filter
                delayPressIn={0}
                type={selectedFilter === 'unitario' ? 'selected' : 'unselected'}
                onPress={() => {
                    setSelectedFilter("unitario")
                    setFilter("unitario")
                }}
            >
                {
                    selectedFilter === "unitario" ? <SelectedIcon name="check" /> : null
                }
                <FilterName
                    type={selectedFilter === 'unitario' ? 'selected' : 'unselected'}
                >Valor unit.</FilterName>
            </Filter>

            <Filter
                delayPressIn={0}
                type={selectedFilter === 'total' ? 'selected' : 'unselected'}
                onPress={() => {
                    setSelectedFilter("total")
                    setFilter("total")
                }}
            >
                {
                    selectedFilter === "total" ? <SelectedIcon name="check" /> : null
                }
                <FilterName
                    type={selectedFilter === 'total' ? 'selected' : 'unselected'}
                >Valor total</FilterName>
            </Filter>

            <FilterIcon name="filter-list" />
        </Container>
    );
}