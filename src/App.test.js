import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders transmonitor app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Transmonitor/i);
  expect(linkElement).toBeInTheDocument();
});
