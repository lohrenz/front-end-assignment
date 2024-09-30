import React, { useState, useEffect } from 'react';
import styles from './NotePageList.module.css';
import NoteItem from '../NoteItem/NoteItem';
import Modal from '../Modal/Modal';

import { ReactComponent as AddIcon } from '../../assets/add.svg';



function NotePageList() {
    const [notes, setNotes] = useState([]);
    const [editingNoteId, setEditingNoteId] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [noteToDelete, setNoteToDelete] = useState(null);
    const [isFetching, setIsFetching] = useState(false);


    useEffect(() => {
        if (!isFetching) {
            getNotes();
        }
    }, []);

    const getNotes = async () => {
        try {
            setIsFetching(true);
            const response = await fetch('/api/notes/');
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                setNotes(Array.isArray(jsonResponse) ? jsonResponse : []);
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsFetching(false);
        }
    };

    const handleEditStartMode = (noteId) => {
        setEditingNoteId(noteId);
    };

    const handleStopEditMode = () => {
        setEditingNoteId(null);
    };

    const handleDeleteClick = (note) => {
        setOpenModal(true);
        setNoteToDelete(note);
    };

    const handleModalClose = () => {
        setOpenModal(false);
        setNoteToDelete(null);
    };

    const confirmDelete = () => {
        if (noteToDelete) {
            deleteNote(noteToDelete.id);
        }
        handleModalClose();
    }


    const updateNote = async (updatedNote) => {
        try {
            const response = await fetch(`/api/notes/${updatedNote.id}/update/`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedNote),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                setNotes((prevNotes) =>
                    prevNotes.map((note) =>
                        note.id === jsonResponse.id ? jsonResponse : note
                    )
                );
                console.log("Notitie succesvol bijgewerkt:", jsonResponse);
            } else {
                console.log("Error bij bijwerken van notitie");
            }
        } catch (error) {
            console.log("PUT-aanvraag Error:", error);
        }
    };

    const deleteNote = async (id) => {
        try {
            const response = await fetch(`/api/notes/${id}/delete/`, {
                method: "DELETE",
                headers: {
                    'Content-Type': 'application/json'
                },
            });

            if (response.ok) {
                setNotes((prevNotes) =>
                    prevNotes.filter((note) =>
                        note.id !== id
                    )
                );
                console.log("Notitie succesvol verwijderd");
            } else {
                console.log("Error bij verwijderen van notitie");
            }
        } catch (error) {
            console.log("Delete aanvraag Error:", error);
        }
    };

    const addNote = async () => {
        try {
            const newNote = {
                title: '',
                body: '',
                updated: new Date().toISOString(),
            };

            const response = await fetch(`/api/notes/create/`, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newNote),
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                setNotes((prevNotes) => [jsonResponse, ...prevNotes]);
                console.log("Notitie succesvol bijgewerkt:", jsonResponse);
            } else {
                console.log("Error bij bijwerken van notitie");
            }
        } catch (error) {
            console.log("POST-aanvraag Error:", error);
        }
    }


    return (
        <div className={styles.notepagelist}>
            {Array.isArray(notes) && notes.length > 0 ? (
                notes
                    .sort((a, b) => new Date(b.updated) - new Date(a.updated))
                    .map((note, index) => (
                        <NoteItem
                            key={note.id || index}
                            note={note}
                            onSave={updateNote}
                            onDelete={() => handleDeleteClick(note)}
                            onEditStart={handleEditStartMode}
                            onEditStop={handleStopEditMode}
                            isEditing={editingNoteId === note.id} />
                    ))
            ) : (
                <p>Geen notities gevonden</p>
            )}
            <button className={styles.newNote} onClick={addNote} title='addNote'>
                <AddIcon />
            </button>
            {openModal && (
                <Modal
                    onClose={handleModalClose}
                    onConfirm={confirmDelete}
                />
            )}
            {editingNoteId && <div className={styles.overlay}></div>}
        </div >
    )
}

export default NotePageList
