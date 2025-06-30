import { render, fireEvent, screen } from '@testing-library/react-native';
import CounterButton from '../src/components/CounterButton';
import CounterScreen from '../src/screens/CounterScreen';
describe("ButtonCounter", ()=>{
    it("Verify if the button is initializing with the correct title.", ()=> {
        const functionMock = jest.fn();
        const {getByText} = render(<CounterButton title="teste" onPress={functionMock} />);
        expect(getByText("teste"))
    })

    it('should increment the counter when the "Aumentar" button is pressed', () => {
        render(<CounterScreen />);

        const incrementButton = screen.getByText('Aumentar');

        const countText = screen.getByText(/Contagem:/i);

        fireEvent.press(incrementButton); 
        expect(countText).toHaveTextContent('Contagem: 1');

        fireEvent.press(incrementButton);
        expect(countText).toHaveTextContent('Contagem: 2');
  });

    it('should decrement the counter when the "Diminuir" button is pressed', () => {
        render(<CounterScreen />);

        const incrementButton = screen.getByText('Aumentar');
        const decrementButton = screen.getByText('Diminuir');
        const countText = screen.getByText(/Contagem:/i);

        fireEvent.press(incrementButton);
        fireEvent.press(incrementButton);
        fireEvent.press(incrementButton);

        expect(countText).toHaveTextContent('Contagem: 3');

        fireEvent.press(decrementButton);
        expect(countText).toHaveTextContent('Contagem: 2');

        fireEvent.press(decrementButton);
        expect(countText).toHaveTextContent('Contagem: 1');
    });

    it('should reset the counter to 0 when the "Resetar" button is pressed', () => {
        render(<CounterScreen />);
        
        const incrementButton = screen.getByText('Aumentar');
        const resetButton = screen.getByText('Resetar');
        const countText = screen.getByText(/Contagem:/i);

        fireEvent.press(incrementButton);
        fireEvent.press(incrementButton);
        fireEvent.press(incrementButton);
        expect(countText).toHaveTextContent('Contagem: 3');

        fireEvent.press(resetButton);
        expect(countText).toHaveTextContent('Contagem: 0');
    });
})