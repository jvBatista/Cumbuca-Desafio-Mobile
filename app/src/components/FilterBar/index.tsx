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
                type={selectedFilter === 'nome' ? 'selected' : 'unselected'}
                onPressIn={() => {
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
                type={selectedFilter === 'estoque' ? 'selected' : 'unselected'}
                onPressIn={() => {
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
                type={selectedFilter === 'unitario' ? 'selected' : 'unselected'}
                onPressIn={() => {
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
                type={selectedFilter === 'total' ? 'selected' : 'unselected'}
                onPressIn={() => {
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