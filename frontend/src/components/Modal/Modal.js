import React from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose, onConfirm }) => {
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
                    <button className={`${styles.buttonSubmit} ${styles.buttonCancel}`} onClick={onClose}> ANNULEREN</button>
                    <button className={`${styles.buttonSubmit} ${styles.buttonSave}`} onClick={onConfirm}>VERWIJDEREN</button>

                </div>
            </div>
        </div >
    )
}

export default Modal
