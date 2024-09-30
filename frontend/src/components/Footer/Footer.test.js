import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from './Footer';

test('Renders the header with bootmine logo', () => {
    render(<Footer />);
    const footertext = screen.getByText(/© Bootmine, 2022/i);
    expect(footertext).toBeInTheDocument();
});

