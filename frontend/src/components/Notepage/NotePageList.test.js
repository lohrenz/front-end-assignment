import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NotePageList from './NotePageList';
import { act } from 'react';

// Mock voor fetch requests
beforeEach(() => {
    global.fetch = jest.fn(() => Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]), // Mock lege respons
    }));
});

test('renders NotePageList with "Geen notities gevonden" when no notes are present', async () => {
    render(<NotePageList />);
    expect(screen.getByText(/Geen notities gevonden/i)).toBeInTheDocument();
});


// tried to make a test to add a note.
// problem: act function from react is acting weird.
// spending a whole day solving the problem, unfortunately 
// couldn't solve it