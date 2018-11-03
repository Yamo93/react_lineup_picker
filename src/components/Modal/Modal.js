import React from 'react';
import classes from './Modal.module.css';

const modal = (props) => {
    return (
        <div className={props.modalCondition ? classes.Modal : classes.ModalHidden /*classes.ModalHidden - conditionally*/}>
            <h1 className={classes.ModalTitle}>Welcome to the Line-Up Picker! </h1>
            <p className={classes.ModalDesc}>Basic Instructions:</p>
            <ul>
                <li>👉 Change the formations in the top-left corner.</li>
                <li>👉 Change the kit colors in the top-right corner.</li>
                <li>👉 Change player names/numbers in the player list.</li>
            </ul>
            <p onClick={props.toggleModal} className={classes.ModalBtn}>Got It!</p>
        </div>
    );
};

export default modal;