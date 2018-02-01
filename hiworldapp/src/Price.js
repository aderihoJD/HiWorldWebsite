import React from 'react';
import axios from 'axios';

class Price extends React.Component {

    sendingForm() {
        axios.post('http://localhost:3001/call', {"name": "ilyas", "status": "busy"})
            .then(res => {
                console.log(`Successed request with res: ${res}`);
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            });
    }

    render() {
        return (
            <div>
                <h1>Fill the form</h1>
                <button onClick={this.sendingForm}>Send</button>
            </div>
        );
    }
}

export default Price