import React, { Component } from "react";
import { RaisedButton, TextField, Card, Avatar } from "material-ui";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

class TypeSave extends Component {

    render() {
        return (
            <Card raised={true} style={{ backgroundColor: "ghostwhite", width: '450px', height: '400px', padding: '50px', 'margin-top': '100px', 'margin-right': '50px' }}>
                < Typography variant="h5" >Write a Compliment</Typography >
                <br />
                <Avatar src={require("../write.png")} alt="choose icon" style={{ width: '150px', height: '150px' }} />
                <br />
                <TextField
                    type="text"
                    id="complimentText"
                    color="primary"
                    placeholder="Type in a compliment."
                    inputStyle={{ textAlign: 'center' }}
                    hintStyle={{ textAlign: 'center' }}
                    onChange={this.props.selectCompliment}
                />
                <br />
                <RaisedButton label="Save Compliment" onClick={() => { this.props.saveCompliment(); this.props.fetchCompliments(); }} />
            </Card>
        );
    }
}

export default TypeSave;
