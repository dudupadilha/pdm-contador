// components/CounterButton.tsx
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export interface CounterButtonProps {
  title: string;
  onPress: () => void;
  isReset?: boolean;
  testID?: string;
}

const CounterButton: React.FC<CounterButtonProps> = ({ title, onPress, isReset = false }) => {
  return (
    <TouchableOpacity
      style={[styles.button, isReset ? styles.resetButton : styles.defaultButton]}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    margin: 10,
    minWidth: 150,
    alignItems: 'center',
  },
  defaultButton: {
    backgroundColor: '#007AFF',
  },
  resetButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CounterButton;