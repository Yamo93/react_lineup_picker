import React from 'react';
import classes from './SelectionChooser.module.css';

const selectionChooser = (props) => {
    //console.log(props.players);
    return (
        <div className={classes.Selection}>
        <div className={classes.playerWrapper}>
            <p className={classes.playerLabel}>Player: </p>
            <p className={classes.numberLabel}>Number: </p>
            <p className={classes.playerLabelAdded}>Player: </p>
            <p className={classes.numberLabelAdded}>Number: </p>
            {/* enter these dynamically */}
            {props.players.map(player => {
                return (
                    <>
                    <input key={player.id} type="text" onChange={(event) => props.changedName(event, player.id)} placeholder={player.playerName} value={player.playerName} className={classes.inputName} />
                    <input key={player.id} type="number" onChange={(event) => props.changedNum(event, player.id)} min="1" max="40" value={player.playerNumber} placeholder={player.playerNumber} className={classes.inputNum} />
                    </>
                );
            })}
            
        </div>
    </div>
    );
};

export default selectionChooser;