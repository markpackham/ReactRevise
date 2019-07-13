import React, {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success"/>
                    <h1>Thanks for filling the forms in</h1>
                    <p>Now for the false promise of getting an email sent to you.</p>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Success;