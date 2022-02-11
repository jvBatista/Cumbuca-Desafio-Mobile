/* eslint-disable camelcase */
import React from 'react';
import { ThemeProvider } from 'styled-components';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import Navigation from './src/navigation/navigation';

import theme from './src/global/styles/theme';

export default function App() {
  const [fontLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });
  if (!fontLoaded) return <AppLoading />;
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
          <Navigation />
      </NavigationContainer>
    </ThemeProvider>
  );
}
