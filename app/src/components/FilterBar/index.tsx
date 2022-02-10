import React, { useState } from 'react';
import {
    Container,
    Filter,
    FilterName,
    SelectedIcon,
    FilterIcon
} from './style';

// interface IButtonProps {
//     setFilter: VoidFunction;
// }

export function FilterBar(
    // { setFilter }: IButtonProps
) {
    const [selectedFilter, setSelectedFilter] = useState("nome");

    return (
        <Container>
            <Filter onPress={() => {
                setSelectedFilter("nome")
                // setFilter()
            }}>
                {
                    selectedFilter === "nome" ? <SelectedIcon name="check" /> : null
                }
                <FilterName>Nome</FilterName>
            </Filter>

            <Filter onPress={() => {
                setSelectedFilter("estoque")
                // setFilter()
            }}>
                {
                    selectedFilter === "estoque" ? <SelectedIcon name="check" /> : null
                }
                <FilterName>Estoque</FilterName>
            </Filter>

            <Filter onPress={() => {
                setSelectedFilter("unitario")
                // setFilter()
            }}>
                {
                    selectedFilter === "unitario" ? <SelectedIcon name="check" /> : null
                }
                <FilterName>Valor unit.</FilterName>
            </Filter>

            <Filter onPress={() => {
                setSelectedFilter("total")
                // setFilter()
            }}>
                {
                    selectedFilter === "total" ? <SelectedIcon name="check" /> : null
                }
                <FilterName>Valor total</FilterName>
            </Filter>

            <FilterIcon name="filter-list" />
        </Container>
    );
}