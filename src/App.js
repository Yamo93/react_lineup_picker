import React, { Component } from 'react';
import classes from './App.module.css'; // installed CSS modules in CRA 2.2
import Controller from './containers/Controller/Controller';
import Pitch from './containers/Pitch/Pitch';

/*
GOALS ACHIEVED:
  - fix changeNumHandler => DONE
 - create changeFormationHandler: DONE (80%)
 ** make the values in option element dynamic (coming straight from the state instead of being hardcoded)
 ** it seems to work now :D which is a great progress and something to be proud for. the only issue is that when we go back to the default formation, the changed names are lost. it should reflect whatever is in the actual state, not what is initially hardcoded. I guess that is because of the fact that we have a "hardcoded alternative" in our ternary operator which gets turned on whenever we switch to the default formation, so the name changes get lost (it doesnt reflect the state basically)
 ** add more formations like 4-3-3, and some other ones that you can search for. You want at least 4-5 different formations, the most common ones

TODOS:
 - create changeColorHandler

 - add a modal that slides down initially and shows the "instructions" for the lineup-picker

 - maybe add some title at the top like "lineup picker" or something cool for improving the UI.

 SUGGESTIONS:
 - clean up some of the code like the nested for-loops, improve the logic a bit if possible

*/

class App extends Component {
  state = {
    players: [
      {'4-3-2-1': [
        {id: '1', playerName: 'Dybala', playerNumber: '10', position: 'centralForward'}, 
        {id: '2', playerName: 'Costa', playerNumber: '11', position: 'rightForward'}, 
        {id: '3', playerName: 'Ronaldo', playerNumber: '7', position: 'leftForward'}, 
        {id: '4', playerName: 'Can', playerNumber: '23', position: 'centralMid'}, 
        {id: '5', playerName: 'Pjanic', playerNumber: '5', position: 'leftMid'}, 
        {id: '6', playerName: 'Matuidi', playerNumber: '14', position: 'rightMid'}, 
        {id: '7', playerName: 'Cancelo', playerNumber: '20', position: 'rightDef'}, 
        {id: '8', playerName: 'Bonucci', playerNumber: '19', position: 'midRightDef'}, 
        {id: '9', playerName: 'Chiellini', playerNumber: '3', position: 'midLeftDef'}, 
        {id: '10', playerName: 'Sandro', playerNumber: '12', position: 'leftDef'}, 
        {id: '11', playerName: 'Szczesny', playerNumber: '1', position: 'goalKeeper'}
      ]},
      {'4-4-2': [
        {id: '1', playerName: 'Dybala', playerNumber: '10', position: 'rightForward'}, 
        {id: '2', playerName: 'Costa', playerNumber: '11', position: 'rightMid'}, 
        {id: '3', playerName: 'Ronaldo', playerNumber: '7', position: 'leftForward'}, 
        {id: '4', playerName: 'Can', playerNumber: '23', position: 'centralLeftMid'}, 
        {id: '5', playerName: 'Pjanic', playerNumber: '5', position: 'leftMid'}, 
        {id: '6', playerName: 'Matuidi', playerNumber: '14', position: 'centralRightMid'}, 
        {id: '7', playerName: 'Cancelo', playerNumber: '20', position: 'rightDef'}, 
        {id: '8', playerName: 'Bonucci', playerNumber: '19', position: 'midRightDef'}, 
        {id: '9', playerName: 'Chiellini', playerNumber: '3', position: 'midLeftDef'}, 
        {id: '10', playerName: 'Sandro', playerNumber: '12', position: 'leftDef'}, 
        {id: '11', playerName: 'Szczesny', playerNumber: '1', position: 'goalKeeper'}
    ]}
  ], 
    formation: '4-3-2-1',
    formationIsChanged: false,
    showedFormation: []
  };

  changePlayerNameHandler = (event, key) => {

    let copiedPlayers = [...this.state.players];
    let playerArr = [];
    let playerKey;
    copiedPlayers.forEach(player => {
      Object.keys(player).forEach(key => {
        if (key === this.state.formation) {
          playerArr = player[key];
          playerKey = key;
        }
      });
    });

    playerArr.forEach(player => {
      if (key === player.id) {
        player.playerName = event.target.value;
      }
    });

    copiedPlayers.forEach(player => {
      Object.keys(player).forEach(key => {
        if (key === playerKey) {
          player[key] = playerArr;
        }
      })
    });

    console.log("after update", copiedPlayers);

    this.setState({players: copiedPlayers});

  }

  changePlayerNumHandler = (event, key) => {

        // you have to loop through the players to find the correct formation
        let copiedPlayers = [...this.state.players];
        let playerArr = []; // you shouldnt recreate an arr, but just replace it in the existing copiedPlayers
        let playerKey;
        copiedPlayers.forEach(player => {
          Object.keys(player).forEach(key => {
            if (key === this.state.formation) {
              playerArr = player[key];
              playerKey = key;
            }
          });
        });
    
        playerArr.forEach(player => {
          if (key === player.id) {
            player.playerNumber = event.target.value;
          }
        });
    
        copiedPlayers.forEach(player => {
          Object.keys(player).forEach(key => {
            if (key === playerKey) {
              player[key] = playerArr;
            }
          })
        });
    
        console.log("after update", copiedPlayers);
    
        this.setState({players: copiedPlayers});
  }

  changeFormationHandler = (event, grabbedFormation) => {
    this.setState({formationIsChanged: true});
    //console.log(formation);
    let currentPlayers = [...this.state.players];
    currentPlayers.forEach(player => Object.keys(player).forEach(formation => {
      if (formation === grabbedFormation) {
        console.log("We want this lineup: ", player[grabbedFormation]);

        this.setState({formation: grabbedFormation, showedFormation: player[grabbedFormation]});
      }
    }));
  }

  render() {

    let currentPlayers = [...this.state.players];
    let formations = [];

    currentPlayers.forEach(player => Object.keys(player).forEach(formation => formations.push(formation)));


    return (
      <div className={classes.App}>
        <Controller players={!this.state.formationIsChanged ? this.state.players[0][this.state.formation] : this.state.showedFormation} changedName={this.changePlayerNameHandler} changedNum={this.changePlayerNumHandler} changedFormation={this.changeFormationHandler} formations={formations} />
        <Pitch formation={this.state.formation} players={!this.state.formationIsChanged ? this.state.players[0][this.state.formation] : this.state.showedFormation} changedName={this.changePlayerNameHandler} changedNum={this.changePlayerNumHandler} />
      </div>
    );
  }
}

export default App;
