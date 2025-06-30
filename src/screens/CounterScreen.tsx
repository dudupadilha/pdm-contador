// App.tsx
import React, { useState, PropsWithChildren } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import CounterDisplay from '../components/CounterDisplay';
import CounterButton from '../components/CounterButton';
import { Title } from '../components/Title'

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increment = (): void => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = (): void => { 
    setCount(prevCount => prevCount - 1);
  };

  const reset = (): void => { 
    setCount(0);
  };

  return (
    <View style={styles.container}>
      <Title/>
      <CounterDisplay count={count} />

      <View style={styles.buttonContainer}>

        <CounterButton 
        title="Diminuir" 
        testID="button-diminuir" 
        onPress={decrement} 
        />

        <CounterButton 
        title="Aumentar" 
        testID="button-aumentar" 
        onPress={increment} 
        />

        <CounterButton 
        title="Resetar" 
        testID="button-resetar" 
        onPress={reset} 
        isReset={true}
        />

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: '100%',
  },
});