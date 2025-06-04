import React from 'react';
import { render, screen } from '@testing-library/react';

describe('sample component test', () => {
  it('renders text', () => {
    render(<div>Hello Jest</div>);
    expect(screen.getByText('Hello Jest')).toBeInTheDocument();
  });
});
