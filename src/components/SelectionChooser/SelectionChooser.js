import React from 'react';
import classes from './SelectionChooser.module.css';

const selectionChooser = (props) => {
    //console.log(props.players);
    return (
        <div className={classes.Selection}>
        <ul className={classes.playerNameList}>
            <p className={classes.playerLabel}>Player: </p>
            {/* enter these dynamically */}
            {props.players.map(player => {
                return (
                    <li key={player.id}><input type="text" onChange={(event) => props.changedName(event, player.id)} placeholder={player.playerName} value={player.playerName} className={classes.inputName} /></li>
                );
            })}
            
        </ul>
        <ul className={classes.playerNumberList}>
            <p className={classes.numberLabel}>Number: </p>
            {/* enter these dynamically */}
            {props.players.map(player => {
                return (
                    <li key={player.id}><input type="number" onChange={(event) => props.changedNum(event, player.id)} min="1" max="40" value={player.playerNumber} placeholder={player.playerNumber} className={classes.inputNum} /></li>
                );
            })}
        </ul>
    </div>
    );
};

export default selectionChooser;