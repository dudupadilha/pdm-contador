import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import CounterScreen from '../screens/CounterScreen';

export type RootStackParamList = {
  Login: undefined;
  Counter: undefined; 
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>

      <Stack.Screen name="Login" component={LoginScreen} />

      <Stack.Screen name="Counter" component={CounterScreen} />

    </Stack.Navigator>
  );
};

export default AppNavigator;
