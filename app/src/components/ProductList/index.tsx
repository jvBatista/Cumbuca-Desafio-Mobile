import React, { useState } from 'react';
import {
    Container,
    ItemsList
} from './style';
import { FilterBar } from '../../components/FilterBar';
import { Product } from '../../components/Product';
import { FlatList } from 'react-native-gesture-handler';

interface IProduct {
    name: string;
    productId: number;
    numberOfUnits: number;
    unitValue: number;
}

interface IProductListProps {
    searchQuery: string;
}

export function ProductList({searchQuery}:IProductListProps) {
    const [sortFilter, setSortFilter] = useState("nome");

    function sortingFunction(a: IProduct, b: IProduct) {
        switch (sortFilter) {
            case "estoque":
                if (a.numberOfUnits > b.numberOfUnits) {
                    return 1;
                }
                if (a.numberOfUnits < b.numberOfUnits) {
                    return -1;
                }
                
                return 0;
            case "unitario":
                if (a.unitValue > b.unitValue) {
                    return 1;
                }
                if (a.unitValue < b.unitValue) {
                    return -1;
                }
                
                return 0;
            case "total":
                const totalA = a.unitValue*a.numberOfUnits;
                const totalB = b.unitValue*b.numberOfUnits;
                if (totalA > totalB) {
                    return 1;
                }
                if (totalA < totalB) {
                    return -1;
                }
                
                return 0;
            default:
                if (a.name > b.name) {
                    return 1;
                }
                if (a.name < b.name) {
                    return -1;
                }
                
                return 0;
        }
    }


    const products = [
        {
            name: "Produto 1",
            productId: 1,
            numberOfUnits: 500,
            unitValue: 5.99,
        },
        {
            name: "Produto 2",
            productId: 2,
            numberOfUnits: 45,
            unitValue: 5.99,
        },
        {
            name: "Produto 3",
            productId: 3,
            numberOfUnits: 120,
            unitValue: 5.99,
        },
        {
            name: "Produto 4",
            productId: 4,
            numberOfUnits: 800,
            unitValue: 5.99,
        },
    ];

    return (
        <Container>
            <FilterBar setFilter={setSortFilter}/>
            <ItemsList
                data={products.sort(sortingFunction).filter(item => {
                    if (
                      !searchQuery ||
                      item.name
                        .toLowerCase()
                        .includes(searchQuery.toLowerCase().trim())
                    ) {
                      return item;
                    }
                  })}
                renderItem={({ item, index }) => (
                    <Product
                        name={item.name}
                        productId={item.productId}
                        numberOfUnits={item.numberOfUnits}
                        unitValue={item.unitValue}
                    />
                )}
                keyExtractor={item => item.productId}
            />
        </Container>
    );
}