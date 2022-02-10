import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/HomeScreen';
import theme from '../global/styles/theme';

const Stack = createNativeStackNavigator();

const AppRoutes = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: theme.colors.primary_light,
        },
        headerTitleStyle: {
          color: theme.colors.on_background,
          fontFamily: theme.fonts.medium,
        },
      }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export default function Navigation() {
  return <AppRoutes />;
}
