import React, { useState, useEffect } from 'react';
import styles from './NotePageList.module.css';
import NoteItem from '../NoteItem/NoteItems';
import { ReactComponent as AddIcon } from '../../assets/add.svg';

function NotePageList() {
    const [notes, setNotes] = useState([]);
    useEffect(() => {
        getNotes();
    }, []);

    const getNotes = async () => {
        try {
            const response = await fetch('/api/notes/');
            if (response.ok) {
                const jsonResponse = await response.json();
                console.log(jsonResponse);
                setNotes(jsonResponse);
            }
        } catch (error) {
            console.log(error);
        }
    }
    console.log(notes);
    return (
        <div className={styles.notepagelist}>
            {notes.map((note, index) => (
                <NoteItem key={index} note={note} />
            ))}
            <button className={styles.newNote}>
                <AddIcon />
            </button>
        </div >
    )
}

export default NotePageList
