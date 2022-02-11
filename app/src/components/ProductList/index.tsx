import React, { Dispatch, SetStateAction, useRef, useState } from 'react';
import { ActivityIndicator, KeyboardAvoidingView, Animated } from 'react-native';
import {
    Container,
    ItemsList,
    LoadingContainer
} from './style';
import { FilterBar } from '../../components/FilterBar';
import { Product } from '../../components/Product';
import theme from '../../global/styles/theme';

interface IProduct {
    name: string;
    productId: number;
    numberOfUnits: number;
    unitValue: number;
}

interface IProductListProps {
    searchQuery: string;
    productList: Array<IProduct>;
    setProductList: Dispatch<SetStateAction<IProduct[]>>;
    loading: boolean;
}

export function ProductList({ searchQuery, productList, setProductList, loading }: IProductListProps) {
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
                const totalA = a.unitValue * a.numberOfUnits;
                const totalB = b.unitValue * b.numberOfUnits;
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

    const scrollY = useRef(new Animated.Value(0)).current;
    const ITEM_SIZE = 96 + 8 * 3;

    return (
        <Container>
            <FilterBar setFilter={setSortFilter} />
            {
                loading ? (
                    <LoadingContainer>
                        <ActivityIndicator size="large" color={theme.colors.secondary} />
                    </LoadingContainer>
                ) : (
                    <Animated.FlatList
                        style={{ width: "100%" }}
                        data={productList.sort(sortingFunction).filter(item => {
                            if (
                                !searchQuery ||
                                item.name
                                    .toLowerCase()
                                    .includes(searchQuery.toLowerCase().trim())
                            ) {
                                return item;
                            }
                        })}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                            { useNativeDriver: true }
                        )}
                        renderItem={({ item, index }) => {
                            const inputRange = [
                                -1,
                                0,
                                ITEM_SIZE * index,
                                ITEM_SIZE * (index + 2),
                            ]

                            const scale = scrollY.interpolate({
                                inputRange,
                                outputRange: [1, 1, 1, 0],
                            })

                            const opacityInputRange = [
                                -1,
                                0,
                                ITEM_SIZE * index,
                                ITEM_SIZE * (index + .5),
                            ]

                            const opacity = scrollY.interpolate({
                                inputRange: opacityInputRange,
                                outputRange: [1, 1, 1, 0],
                            })

                            return (
                                <Animated.View
                                    style={{
                                        transform: [{scale}],
                                        opacity,
                                    }}
                                >
                                    <KeyboardAvoidingView
                                        behavior="position"
                                        keyboardVerticalOffset={100}
                                    >
                                        <Product
                                            product={item}
                                            productList={productList}
                                            setProductList={setProductList}
                                        />
                                    </KeyboardAvoidingView>
                                </Animated.View>
                            );
                        }}
                        keyExtractor={item => item.productId.toString()}
                    />
                )
            }
        </Container>
    );
}