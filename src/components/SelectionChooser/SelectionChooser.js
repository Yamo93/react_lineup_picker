import React, { Component } from 'react';
import classes from './SelectionChooser.module.css';
import PlayerInput from '../../containers/PlayerInput/PlayerInput';

class SelectionChooser extends Component {
    /*componentDidMount() {
        console.log('this got run');
        this.inputElement.focus();
    }*/

    render () {
        return (
            <div className={classes.Selection}>
            <div className={classes.playerWrapper}>
                <p className={classes.playerLabel}>Player: </p>
                <p className={classes.numberLabel}>Number: </p>
                <p className={classes.playerLabelAdded}>Player: </p>
                <p className={classes.numberLabelAdded}>Number: </p>
                {/* enter these dynamically */}
                {this.props.players.map((player, index) => {
                    return (
                        <PlayerInput position={index} key={index} nameKey={player.playerNumber} numKey={player.id} changedName={this.props.changedName} changedNum={this.props.changedNum} namePlaceholder={player.playerName} numPlaceholder={player.playerNumber} nameValue={player.playerName} numValue={player.playerNumber} />
                    );
                })}
                
            </div>
        </div>
        );
    }
}


export default SelectionChooser;