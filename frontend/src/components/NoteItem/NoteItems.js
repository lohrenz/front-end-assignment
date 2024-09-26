import React from 'react';
import styles from './NoteItem.module.css';
import { ReactComponent as DelIcon } from '../../assets/basic_trashcan.svg';
import { ReactComponent as UpdateIcon } from '../../assets/software_pencil.svg';


const getTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
}

function NoteItems({ note }) {
    return (
        <div className={styles.noteItem}>
            <h2 className={styles.noteTitle}>{note.title}</h2>
            <p className={styles.noteText}>{note.body}</p>
            <div className={styles.noteAction}>
                <button className={styles.noteBtn}>
                    <DelIcon />
                </button>
                <button className={styles.noteBtn}>
                    <UpdateIcon />
                </button>
            </div>
            <p className={styles.itemDate}><span>{getTime(note)}</span></p>
        </ div >
    )
}

export default NoteItems
