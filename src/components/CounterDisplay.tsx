import React from 'react';
import { StyleSheet, Text } from 'react-native';

interface CounterDisplayProps {
  count: number;
}

const CounterDisplay: React.FC<CounterDisplayProps> = ({ count }) => {
  return (
    <Text style={styles.countText}>Contagem: {count}</Text>
  );
};

const styles = StyleSheet.create({
  countText: {
    fontSize: 50,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 40,
  },
});

export default CounterDisplay;