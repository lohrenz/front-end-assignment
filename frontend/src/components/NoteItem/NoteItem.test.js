import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NoteItem from './NoteItem';

const mockNote = {
    id: 1,
    title: 'Test titel #1',
    body: 'Dit is de body!',
    updated: new Date().toISOString(),
};

test('renders NoteItem with content', () => {
    render(<NoteItem note={mockNote} onSave={jest.fn()} onDelete={jest.fn()} onEditStart={jest.fn()} onEditStop={jest.fn()} isEditing={false} />);

    expect(screen.getByText(/Test titel #1/i)).toBeInTheDocument();
    expect(screen.getByText(/Dit is de body!/i)).toBeInTheDocument();
});

test('calls onEditStart when the edit button is clicked', () => {
    const onEditStart = jest.fn();

    render(<NoteItem note={mockNote} onSave={jest.fn()} onDelete={jest.fn()} onEditStart={onEditStart} onEditStop={jest.fn()} isEditing={false} />);

    const editButton = screen.getByLabelText(/edit/i);
    fireEvent.click(editButton);

    expect(onEditStart).toHaveBeenCalledTimes(1);
});

test('calls onDelete when the delete button is clicked', () => {
    const onDelete = jest.fn();

    render(<NoteItem note={mockNote} onSave={jest.fn()} onDelete={onDelete} onEditStart={jest.fn()} onEditStop={jest.fn()} isEditing={false} />);

    const deleteButton = screen.getByLabelText(/delete/i);
    fireEvent.click(deleteButton);

    expect(onDelete).toHaveBeenCalledTimes(1);
});


