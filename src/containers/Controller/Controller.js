import React, { Component } from 'react';
import classes from './Controller.module.css';
import FormationType from '../../components/FormationType/FormationType';
import SelectionChooser from '../../components/SelectionChooser/SelectionChooser';
import ColorPicker from '../../components/ColorPicker/ColorPicker';

class Controller extends Component {

    render() {
        //console.log(this.props.players);
        return (
            <div className={classes.Controller}>
            {/* these should be individual components, it should be The React Way */}
            <div className={classes.dropDownWrapper}>
                <FormationType changedFormation={this.props.changedFormation} formations={this.props.formations} />
                <ColorPicker kits={this.props.kits} kit={this.props.currentKit} changedColor={this.props.changedColor} />
            </div>

                <SelectionChooser players={this.props.players} changedName={this.props.changedName} changedNum={this.props.changedNum} />
            </div>
        );
    }
}

export default Controller;