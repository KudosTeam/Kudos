// import React, { Component } from "react";
// import { RaisedButton, TextField, Card } from "material-ui";
// import { Typography } from '@material-ui/core';
// import 'typeface-roboto';

// import { SchedulerContainer } from "../containers/Scheduler";

// class Phone extends Component {
//     render() {
//         const props = this.props;
//         return (
//             <Card raised={true} style={{ backgroundColor: 'ghostwhite', width: '450px', height: '400px', padding: '50px', 'margin-top': '100px', 'margin-bottom': '100px' }}>
//                 <Typography variant="h5">Choose a number to call</Typography>
//                 <br />
//                 <TextField type="text" id="phone" placeholder="Enter a phone number." onChange={props.storePhone} />
//                 <br />
//                 <br />
//                 <SchedulerContainer />
//                 <br />
//                 <RaisedButton
//                     label="Send Compliment"
//                     onClick={() => props.makeCall(props.isCalled)}
//                 />
//             </Card>
//         );
//     }
// }

// export default Phone;


import React, { Component } from "react";
import { RaisedButton, TextField, Card } from "material-ui";
import { Typography } from "@material-ui/core"
import "typeface-roboto";
import { SchedulerContainer } from "../containers/Scheduler";

class Phone extends Component {

    render() {
        const props = this.props;
        return (
            <Card raised={true} style={{ backgroundColor: 'ghostwhite', width: '450px', height: '400px', padding: '50px', 'margin-top': '100px', 'margin-bottom': '100px' }}>
                <Typography variant="h5">Choose a number to call</Typography>
                <br />
                <TextField type="text" id="phone" label="phone number"
                    placeholder="81 90 0000 0000"
                    style={{ margin: 8 }} onChange={props.storePhone} />
                <br />
                <br />
                <SchedulerContainer />
                <br />
                <RaisedButton
                    label="Send Compliment"
                    onClick={() => props.makeCall(props.isCalled)}
                />
            </Card>
        );
    }
}

export default Phone;