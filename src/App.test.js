import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/comfortable to study Finnish/i);
  expect(linkElement).toBeInTheDocument();
});
