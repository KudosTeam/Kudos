import React, { Component } from "react";
import { RaisedButton, TextField } from "material-ui";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

class TypeSave extends Component {

    render() {
        return (
            <div className="typeSave" >
                < Typography variant="h5" > Write it yourself with love</Typography >
                <TextField
                    type="text"
                    id="complimentText"
                    onChange={this.props.selectCompliment}
                />
                <br />
                <RaisedButton label="Save Compliment" onClick={() => { this.props.saveCompliment(); this.props.fetchCompliments(); }} />
            </div >
        );
    }
}

export default TypeSave;
