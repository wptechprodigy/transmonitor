import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../Logo';

test('renders logo title', () => {
  const { getByText } = render(<Logo />);
  const linkElement = getByText(/Logo/i);
  expect(linkElement).toBeInTheDocument();
});
