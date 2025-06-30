import { render, fireEvent } from '@testing-library/react-native';
import { Title} from '../src/components/Title'

it("test of title", () => {
  const {getByText} = render(<Title/>);
  expect(getByText("Contador Simples"));
})
