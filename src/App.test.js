import { render, screen } from '@testing-library/react';
import App from './App';

test('renders frank link', () => {
  render(<App />);
  const linkElement = screen.getByText('Frank Duckart');
  expect(linkElement).toBeInTheDocument();
  expect(linkElement).toContainHTML('<a');
});
