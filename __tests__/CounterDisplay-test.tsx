import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react-native';
import CounterScreen from '../src/screens/CounterScreen';

it('should display the initial count as 0', () => {

    render(<CounterScreen />);

    const initialCountText = screen.getByText(/Contagem: 0/i);
    expect(initialCountText).toBeOnTheScreen();
})