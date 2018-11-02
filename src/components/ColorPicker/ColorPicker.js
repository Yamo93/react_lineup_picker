import React from 'react';
import classes from '../FormationType/FormationType.module.css';

const colorPicker = (props) => {
    return (
        <div>
        <label className={classes.formationLabel}>Color of Kit: </label>
        <select className={classes.formationDrop} onChange={(event) => props.changedColor(event, event.target.options[event.target.selectedIndex].value)}>
            {props.kits.map(kit => {
                return (
                    <option key={kit} value={kit}>{kit}</option>
                );
            })}
        </select>
    </div>
    );
};

export default colorPicker;