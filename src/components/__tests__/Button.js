import React from 'react';
import { render } from '@testing-library/react';
import Button from '../Button';

test('renders Button with Button name', () => {
  const { getByText } = render(<Button />);
  const linkElement = getByText(/Button/i);
  expect(linkElement).toBeInTheDocument();
});
