import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  HomeContainer,
  FieldsContainer,
} from './styles';
import { ProductSearchBar } from '../../components/SearchBar';
import { NewProduct } from '../../components/NewProduct';
import { ProductList } from '../../components/ProductList';

export default function Home({ navigation }: any) {

  interface IProduct {
    name: string;
    productId: number;
    numberOfUnits: number;
    unitValue: number;
  };

  const [searchQuery, setSearchQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [productList, setProductList] = useState<IProduct[]>([]);

  const getProductList = async () => {
    setIsLoading(true);
    try {
      const value = await AsyncStorage.getItem('@cpm_productList');
      if (value) {
        const jsonValue = JSON.parse(value);
        setProductList(jsonValue);
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getProductList();
  }, []);

  return (
    <HomeContainer>
      <ImageBackground
        source={require("../../assets/bg_img.png")}
        style={[
          StyleSheet.absoluteFillObject
        ]}
        resizeMode="cover"
        blurRadius={15}
      />
      <ProductSearchBar
        value={searchQuery}
        setValue={setSearchQuery}
      />
      <FieldsContainer>
        <NewProduct
          productList={productList}
          setProductList={setProductList}
        />

        <ProductList searchQuery={searchQuery} productList={productList} setProductList={setProductList} loading={isLoading} />
      </FieldsContainer>
    </HomeContainer>
  );
}
