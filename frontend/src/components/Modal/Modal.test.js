import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Modal from './Modal';

test('renders the modal with  content and buttons', () => {
    const handleClose = jest.fn();
    const handleConfirm = jest.fn();

    render(<Modal onClose={handleClose} onConfirm={handleConfirm} />);

    expect(screen.getByText(/Weet je zeker dat je deze notitie wilt verwijderen?/i)).toBeInTheDocument();
    expect(screen.getByText(/Dit kan niet ongedaan worden gemaakt/i)).toBeInTheDocument();

    const cancelButton = screen.getByRole('button', { name: /annuleren/i });
    const confirmButton = screen.getByRole('button', { name: /verwijderen/i });

    expect(cancelButton).toBeInTheDocument();
    expect(confirmButton).toBeInTheDocument();

    fireEvent.click(cancelButton);
    expect(handleClose).toHaveBeenCalledTimes(1);

    fireEvent.click(confirmButton);
    expect(handleConfirm).toHaveBeenCalledTimes(1);
});