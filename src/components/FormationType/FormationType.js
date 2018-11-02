import React from 'react';
import classes from './FormationType.module.css';

const formationType = (props) => {
    return (
        <div>
            <label className={classes.formationLabel}>Choose Formation: </label>
            <select className={classes.formationDrop} onChange={(event) => props.changedFormation(event, event.target.options[event.target.selectedIndex].value)}>
                {props.formations.map(formation => {
                    return (
                        <option key={formation} value={formation}>{formation}</option>
                    );
                })}
            </select>
        </div>
    );
};

export default formationType;