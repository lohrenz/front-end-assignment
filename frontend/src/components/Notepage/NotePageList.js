import React from 'react';
import styles from './NotePageList.module.css';
import NoteItem from '../NoteItem/NoteItems';


function NotePageList() {
    return (
        <div className={styles.notepagelist}>
            <NoteItem />
        </div >
    )
}

export default NotePageList
