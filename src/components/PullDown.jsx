import React, { Component } from "react";
import { SelectField, MenuItem, Card } from "material-ui";
import { Typography } from '@material-ui/core';
import 'typeface-roboto';

class PullDown extends Component {
    render() {
        let complimentsPullDown = [];
        let menuItems = <MenuItem></MenuItem>
        if (this.props.compliments) {
            console.log(this.props.compliments)
            complimentsPullDown = this.props.compliments.map((compliment, index) => {
                return {
                    'payload': index,
                    'text': compliment
                }
            });
            menuItems = complimentsPullDown.map(item =>
                <MenuItem key={item.payload} payload={item.payload} value={item.text}>{item.text}</MenuItem>
            );
        }
        return (
            <div className="pulldown">
                <Card>
                    <Typography variant="h5">Choose a pre-made compliment</Typography>
                    <SelectField
                        name="compliment"
                        onChange={this.props.selectCompliment}
                        value={this.props.selectedCompliment.split('+').join(' ')}
                    >
                        {menuItems}
                    </SelectField>
                </Card>
            </div >
        );
    }
}

export default PullDown;
