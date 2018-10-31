import React, { Component } from 'react';
import classes from './Pitch.module.css';
import Player from '../../components/Player/Player';

class Pitch extends Component {
    // you have to have this state in your app, and then pass it down as props to both the Pitch and the Controller.
    // state = {
    //     players: [
    //         {playerName: 'Dybala', playerNumber: '10', position: 'centralForward'}, 
    //         {playerName: 'Costa', playerNumber: '11', position: 'rightForward'}, 
    //         {playerName: 'Ronaldo', playerNumber: '17', position: 'leftForward'}, 
    //         {playerName: 'Can', playerNumber: '23', position: 'rightMid'}, 
    //         {playerName: 'Pjanic', playerNumber: '5', position: 'centralMid'}, 
    //         {playerName: 'Matuidi', playerNumber: '14', position: 'leftMid'}, 
    //         {playerName: 'Cancelo', playerNumber: '20', position: 'rightDef'}, 
    //         {playerName: 'Bonucci', playerNumber: '19', position: 'midRightDef'}, 
    //         {playerName: 'Chiellini', playerNumber: '3', position: 'midLeftDef'}, 
    //         {playerName: 'Sandro', playerNumber: '12', position: 'leftDef'}, 
    //         {playerName: 'Szczesny', playerNumber: '1', position: 'goalKeeper'}
    //     ]
    // };

    render() {
        return (
            <div className={classes.Pitch}>
            {/*this should be mapped out actually and kept in a list*/}
            {this.props.players.map(player => {
                return (
                    <Player formation={this.props.formation} key={player.id} playerName={player.playerName} playerNumber={player.playerNumber} position={player.position} />
                );
            })}
            </div>
        );
    }
}

export default Pitch;