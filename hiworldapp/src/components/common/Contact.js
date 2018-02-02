import React from 'react'
import axios from 'axios';

import './Contact.css';

class Contact extends React.Component{
    constructor( props ) {
        super( props );
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: ''
        };
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPhoneChange = this.onPhoneChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.onSendingForm = this.onSendingForm.bind(this);
    }

    onSendingForm() {

        const formContent = {
            "name": this.state.name,
            "email": this.state.email,
            "phone": this.state.phone,
            "message": this.state.message
        };

        axios.post('http://localhost:3001/message', formContent)
            .then(res => {
                this.setState({name: ''});
                this.setState({email: ''});
                this.setState({phone: ''});
                this.setState({message: ''});
            })
            .catch(err => {
                console.log(`Error: ${err}`);
            });
    }

    onNameChange(e){
        this.setState({name: e.target.value});
    }

    onEmailChange(e){
        this.setState({email: e.target.value});
    }

    onPhoneChange(e){
        this.setState({phone: e.target.value});
    }

    onMessageChange(e){
        this.setState({message: e.target.value});
    }


    render(){
        return (
            <div id={"contactUs"}>
                <p className="contactTitle">Contact Us</p>
                <p className="contactInfo">hi-world@gmail.com<br/>+972.53.923.6229</p>
                <form id="form">
                    <input type="text" id="name" placeholder="NAME" onChange={this.onNameChange}/>
                    <input type="email" id="email" placeholder="EMAIL" onChange={this.onEmailChange}/>
                    <input type="text" id="phone" placeholder="PHONE" onChange={this.onPhoneChange}/>
                    <input type="text" id="message" placeholder="MESSAGE" onChange={this.onMessageChange}/>
                    <button type="submit" className="mb-4 btn btn-primary" onClick={this.onSendingForm}>Send</button>
                </form>
            </div>
        )
    }
}

export default Contact;