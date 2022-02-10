import React, { useEffect } from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  HomeContainer,
  FieldsContainer
} from './styles';
import { ProductSearchBar } from '../../components/SearchBar';
import { NewProduct } from '../../components/NewProduct';
import { ProductList } from '../../components/ProductList';

export default function Home({ navigation }: any) {
  // const { authenticated } = useAuth();
  useEffect(() => {

  }, []);

  return (
    <HomeContainer>
      <ProductSearchBar />
      <FieldsContainer>
        <NewProduct />
        <ProductList />
      </FieldsContainer>
    </HomeContainer>
  );
}
