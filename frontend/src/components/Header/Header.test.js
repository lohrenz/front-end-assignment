import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test('Renders the header with bootmine logo', () => {
    render(<Header />);
    const bootmineLogo = screen.getByAltText(/logo/i);
    expect(bootmineLogo).toBeInTheDocument();
});