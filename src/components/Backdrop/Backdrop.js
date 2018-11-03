import React from 'react';
import classes from './Backdrop.module.css';

const backdrop = (props) => {
    return (
        <div onClick={props.toggleModal} className={props.modalCondition ? classes.Backdrop : classes.BackdropHidden}>Backdrop</div>
    );
};

export default backdrop;