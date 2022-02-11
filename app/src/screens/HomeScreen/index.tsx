import React, { useEffect, useState } from 'react';
import { View, ImageBackground, StyleSheet } from 'react-native';
import {
  HomeContainer,
  FieldsContainer
} from './styles';
import { ProductSearchBar } from '../../components/SearchBar';
import { NewProduct } from '../../components/NewProduct';
import { ProductList } from '../../components/ProductList';

export default function Home({ navigation }: any) {
  const [searchQuery, setSearchQuery] = useState("");

  const [newProductName, setNewProductName] = useState("");
  const [newProductNumberOfUnits, setNewProductNumberOfUnits] = useState("");
  const [newProductUnitValue, setNewProductUnitValue] = useState("");

  useEffect(() => {

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
          createFunction={() => { }}
          productName={newProductName}
          productNumberOfUnits={newProductNumberOfUnits}
          productUnitValue={newProductUnitValue}
          setProductName={setNewProductName}
          setProductNumberOfUnits={setNewProductNumberOfUnits}
          setProductUnitValue={setNewProductUnitValue}
        />
        <ProductList searchQuery={searchQuery} />
      </FieldsContainer>
    </HomeContainer>
  );
}
