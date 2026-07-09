import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import App from './App';

test('renders consulting firm landing content', async () => {
  render(<App />);

  expect(await screen.findByText(/trusted partnerships/i)).toBeInTheDocument();
});
