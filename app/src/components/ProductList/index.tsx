import React from 'react';
import {
    Container,
} from './style';
import { FilterBar } from '../../components/FilterBar';
import { Product } from '../../components/Product';

export function ProductList() {
    return (
        <Container>
            <FilterBar />
            <Product />
        </Container>
    );
}