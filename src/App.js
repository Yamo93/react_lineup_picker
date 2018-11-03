import React, { Fragment, Component } from 'react';
import classes from './App.module.css'; // installed CSS modules in CRA 2.2
import Controller from './containers/Controller/Controller';
import Pitch from './containers/Pitch/Pitch';
import Modal from './components/Modal/Modal';
import Backdrop from './components/Backdrop/Backdrop';

/*
GOALS ACHIEVED:
  - fix changeNumHandler => DONE
 - create changeFormationHandler: DONE (100%)
 ** make the values in option element dynamic (coming straight from the state instead of being hardcoded)
 ** it seems to work now :D which is a great progress and something to be proud for. the only issue is that when we go back to the default formation, the changed names are lost. it should reflect whatever is in the actual state, not what is initially hardcoded. I guess that is because of the fact that we have a "hardcoded alternative" in our ternary operator which gets turned on whenever we switch to the default formation, so the name changes get lost (it doesnt reflect the state basically) => DOOONE. IT'S 100% DYNAMIC NOW. GREAT JOB.
 
 ** add more formations like 4-3-3, and some other ones that you can search for. You want at least 4-5 different formations, the most common ones: => DONE, 5 formations done

TODOS:
 - create changeColorHandler => DONE.
 select colors to add, add a dropdown-menu, add colors to state and render them dynamically to dropdown. => DONE.

 - make it responsive => DONE (100%, need to make pitch and players smaller so they fit on a small mobile phone). FIXED.

 - add a modal that slides down initially and shows the "instructions" for the lineup-picker:
 * design how it should look. It should have simple instructions and a "Got it!"-button, as well as a clickable backdrop
 * it should fade fown with transform -100% etc. simple interface, some padding, light-coloured.

 - maybe add some title at the top like "lineup picker" or something cool for improving the UI. For that, you have to decrease the padding top and bottom and use that space.

 SUGGESTIONS:
 - clean up some of the code like the nested for-loops, improve the logic a bit if possible
 - clean up all the cases if possible, and all the added css? its really tall now. can be fixed with mixins for convenience, but not sure how to integrate sass in react

 - you made some components stateful and added the ref to playerinput etc to fix the focus issue. but you seemed to solve it without the ref, so maybe consider changing it back to stateless components (but obviously keep the player input component since its more "reacty" that way)

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
      {'4-3-3': [
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
      {'3-4-3': [
        {id: '1', playerName: 'Dybala', playerNumber: '10', position: 'centralForward'}, 
        {id: '2', playerName: 'Costa', playerNumber: '11', position: 'rightForward'}, 
        {id: '3', playerName: 'Ronaldo', playerNumber: '7', position: 'leftForward'}, 
        {id: '4', playerName: 'Can', playerNumber: '23', position: 'leftMid'}, 
        {id: '5', playerName: 'Pjanic', playerNumber: '5', position: 'centralLeftMid'}, 
        {id: '6', playerName: 'Matuidi', playerNumber: '14', position: 'centralRightMid'}, 
        {id: '7', playerName: 'Bernardeschi', playerNumber: '20', position: 'rightMid'}, 
        {id: '8', playerName: 'Bonucci', playerNumber: '19', position: 'rightDef'}, 
        {id: '9', playerName: 'Chiellini', playerNumber: '3', position: 'midDef'}, 
        {id: '10', playerName: 'Sandro', playerNumber: '12', position: 'leftDef'}, 
        {id: '11', playerName: 'Szczesny', playerNumber: '1', position: 'goalKeeper'}
      ]},
      {'3-5-2': [
        {id: '1', playerName: 'Dybala', playerNumber: '10', position: 'rightForward'}, 
        {id: '2', playerName: 'Costa', playerNumber: '11', position: 'rightMid'}, 
        {id: '3', playerName: 'Ronaldo', playerNumber: '7', position: 'leftForward'}, 
        {id: '4', playerName: 'Can', playerNumber: '23', position: 'centralLeftMid'}, 
        {id: '5', playerName: 'Pjanic', playerNumber: '5', position: 'centralRightMid'}, 
        {id: '6', playerName: 'Matuidi', playerNumber: '14', position: 'centralMid'}, 
        {id: '7', playerName: 'Bernardeschi', playerNumber: '20', position: 'leftMid'}, 
        {id: '8', playerName: 'Bonucci', playerNumber: '19', position: 'rightDef'}, 
        {id: '9', playerName: 'Chiellini', playerNumber: '3', position: 'midDef'}, 
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
    showedFormation: [],
    kits: ['Black-White Striped', 
    'Black-Blue Striped',
    'Black-Red Striped',
    'Blue-Red Striped',
    'Black-Red in Half',
    'Plain Red',
    'Plain Lightblue',
    'Plain White'
  ],
  currentKit: 'Black-White Striped', 
  modalCondition: true
  };

  changePlayerNameHandler = (event, key) => {
    // You have to change the name in all formations, so that the changes are reflected regardless of the formation
    // Great progress. I rearranged the code to change names in all formations, and it also lead to shorter code.

    let copiedPlayers = [...this.state.players];

    copiedPlayers.forEach(player => {
      Object.keys(player).forEach(lineup => {
        //console.log(player[lineup]);
        player[lineup].forEach(playerInfo => {
          if (key === playerInfo.id) {
            playerInfo.playerName = event.target.value;
          }
        });
      });
    });

    this.setState({players: copiedPlayers});

  }

  changePlayerNumHandler = (event, key) => {
    let copiedPlayers = [...this.state.players];

    copiedPlayers.forEach(player => {
      Object.keys(player).forEach(lineup => {
        //console.log(player[lineup]);
        player[lineup].forEach(playerInfo => {
          if (key === playerInfo.id) {
            playerInfo.playerNumber = event.target.value;
          }
        });
      });
    });

    this.setState({players: copiedPlayers});
  }

  changeFormationHandler = (event, grabbedFormation) => {
    this.setState({formationIsChanged: true});
    //console.log(formation);
    let currentPlayers = [...this.state.players];
    currentPlayers.forEach(player => Object.keys(player).forEach(formation => {
      if (formation === grabbedFormation) {
        this.setState({formation: grabbedFormation, showedFormation: player[grabbedFormation]});
      }
    }));
  }

  changeColorHandler = (event, currentColor) => {
    this.setState({currentKit: currentColor});
  }

  toggleModalHandler = (event) => {
    this.setState((prevState) => {
      return {modalCondition: !prevState.modalCondition}
    });
  }

  render() {

    let currentPlayers = [...this.state.players];
    let formations = [];

    currentPlayers.forEach(player => Object.keys(player).forEach(formation => formations.push(formation)));


    return (
      <Fragment>
        <Modal modalCondition={this.state.modalCondition} toggleModal={this.toggleModalHandler} />
        <Backdrop modalCondition={this.state.modalCondition} toggleModal={this.toggleModalHandler} />
        <h1 className={classes.topTitle}>Line-Up Picker ⚽</h1>
        <div className={classes.App}>
          <Controller players={!this.state.formationIsChanged ? this.state.players[0][this.state.formation] : this.state.showedFormation} changedName={this.changePlayerNameHandler} changedNum={this.changePlayerNumHandler} changedFormation={this.changeFormationHandler} formations={formations} kits={this.state.kits} currentKit={this.state.currentKit} changedColor={this.changeColorHandler} />
          <Pitch formation={this.state.formation} players={!this.state.formationIsChanged ? this.state.players[0][this.state.formation] : this.state.showedFormation} changedName={this.changePlayerNameHandler} changedNum={this.changePlayerNumHandler} kit={this.state.currentKit} />
        </div>
      </Fragment>
    );
  }
}

export default App;
