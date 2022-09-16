import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Heart rate limits calculator/i);
  expect(linkElement).toBeInTheDocument();
});
