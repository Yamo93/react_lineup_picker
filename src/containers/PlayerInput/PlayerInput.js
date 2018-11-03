import React, { Fragment, Component } from 'react';
import classes from '../../components/SelectionChooser/SelectionChooser.module.css';

class PlayerInput extends Component {
    render() {
        return (
            <Fragment key={this.props.numValue}>
            <input ref={(input) => {this.inputElement = input }} type="text" onChange={(event) => this.props.changedName(event, this.props.numKey)} placeholder={this.props.namePlaceholder} value={this.props.nameValue} className={classes.inputName} />
            <input type="number" onChange={(event) => this.props.changedNum(event, this.props.numKey)} min="1" max="40" value={this.props.numValue} placeholder={this.props.numPlaceholder} className={classes.inputNum} />
            {/* you have to outsource this into a separate playerInput component. then, pass the index from here down to that input component, and let that inputcomponent be a class. then run the componentDidMount() on that component and let it focus... hopefully it'll work :/ */}
            </Fragment>

        );
    }
}

export default PlayerInput;