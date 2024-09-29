import React, { useState, useRef, useEffect } from 'react';
import styles from './NoteItem.module.css';
import { ReactComponent as DelIcon } from '../../assets/basic_trashcan.svg';
import { ReactComponent as UpdateIcon } from '../../assets/software_pencil.svg';
import { ReactComponent as TickIcon } from '../../assets/tick.svg';
import { ReactComponent as ArrowLeftIcon } from '../../assets/arrow-left.svg';


const getTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
}

function NoteItem({ note, onSave, onDelete }) {
    const [Edit, setEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(note.title);
    const [editBody, setEditBody] = useState(note.body);
    const textAreaRef = useRef(null);


    useEffect(() => {
        if (Edit && textAreaRef.current) {
            textAreaRef.current.style.height = 'auto';
            textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
        }
    }, [Edit]);


    const handlEditClick = () => {
        setEdit(true);
        setTimeout(() => {
            if (textAreaRef.current) {
                textAreaRef.current.style.height = 'auto';
                textAreaRef.current.style.height = `${textAreaRef.current.scrollHeight}px`;
            }
        }, 0);
    };

    const handleTickClick = () => {
        const updateNote = {
            ...note,
            title: editTitle,
            body: editBody,
            updated: new Date().toISOString(),
        };
        onSave(updateNote);
        setEdit(false);

    };

    const handlBackClick = () => {
        setEdit(false);
        setEditTitle(note.title);
        setEditBody(note.body);
    };

    const autoResizeText = (e) => {
        e.target.style.height = 'auto';
        e.target.style.height = `${e.target.scrollHeight}px`;
    };


    return (
        <div className={styles.noteItem}>
            {
                Edit ? (
                    <>
                        <input placeholder="Nieuwe Notitie" type='text' className={styles.noteTitle} value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                        <textarea rows="1" ref={textAreaRef} placeholder="Voeg hier je tekst toe" className={styles.noteText} value={editBody} onChange={(e) => {
                            setEditBody(e.target.value)
                            autoResizeText(e);
                        }}

                        />
                    </>
                ) : (
                    <>
                        <h2 className={styles.noteTitle}>{note.title || 'Nieuwe Notitie'}</h2>
                        <p className={styles.noteText}>{note.body || 'Voeg hier je tekst toe'}</p>
                    </>
                )
            }
            <div className={styles.noteAction}>
                {
                    Edit ? (
                        <>
                            <button className={styles.noteBtn} onClick={handleTickClick}>
                                <TickIcon />
                            </button>
                            <button className={styles.noteBtn} onClick={handlBackClick}>
                                <ArrowLeftIcon />
                            </button>
                        </>
                    ) : (
                        <>
                            <button className={styles.noteBtn} onClick={() => onDelete(note.id)}>
                                <DelIcon />
                            </button>
                            <button className={styles.noteBtn} onClick={handlEditClick}>
                                <UpdateIcon />
                            </button>
                        </>
                    )

                }
            </div>
            <p className={styles.itemDate}><span>{getTime(note)}</span></p>
        </ div >
    )
}

export default NoteItem

