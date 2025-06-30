import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigation/AppNavigator'; // Importe o seu navegador

export default function App() {
  return (
    // NavigationContainer é necessário para envolver todos os seus navegadores
    <NavigationContainer>
      {/* Renderiza o AppNavigator, que por sua vez renderizará a tela inicial (LoginScreen) */}
      <AppNavigator />
    </NavigationContainer>
  );
}
