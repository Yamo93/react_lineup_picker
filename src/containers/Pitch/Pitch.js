import React, { Component } from 'react';
import classes from './Pitch.module.css';
import Player from '../../components/Player/Player';

class Pitch extends Component {

    render() {
        return (
            <div className={this.props.formation === '4-4-2' ? classes.PitchTwoPaired : classes.Pitch}>
            {/*this should be mapped out actually and kept in a list*/}
            {this.props.players.map(player => {
                return (
                    <Player formation={this.props.formation} key={player.id} playerName={player.playerName} playerNumber={player.playerNumber} position={player.position} kit={this.props.kit} />
                );
            })}
            </div>
        );
    }
}

export default Pitch;