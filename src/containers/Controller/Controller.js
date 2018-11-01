import React, { Component } from 'react';
import classes from './Controller.module.css';
import FormationType from '../../components/FormationType/FormationType';
import SelectionChooser from '../../components/SelectionChooser/SelectionChooser';

class Controller extends Component {

    render() {
        //console.log(this.props.players);
        return (
            <div className={classes.Controller}>
            {/* these should be individual components, it should be The React Way */}
                <FormationType changedFormation={this.props.changedFormation} formations={this.props.formations} />

                <SelectionChooser players={this.props.players} changedName={this.props.changedName} changedNum={this.props.changedNum} />
            </div>
        );
    }
}

export default Controller;