import React from 'react';
import styles from './Modal.module.css';

const Modal = () => {
    return (
        <div className={styles.modalContainer}>
            <div className={styles.modal}>
                <div className={styles.modalHeader}>
                    <div className={styles.modalContent}>
                        <h2>Weet je zeker dat je deze notitie wilt verwijderen?</h2>
                        <p>Dit kan niet ongedaan worden gemaakt</p>
                    </div>
                </div>
                <div className={styles.modalFooter}>
                    <button className={`${styles.buttonSubmit} ${styles.buttonCancel}`}> ANNULEREN</button>
                    <button className={`${styles.buttonSubmit} ${styles.buttonSave}`}>VERWIJDEREN</button>

                </div>
            </div>
        </div >
    )
}

export default Modal
