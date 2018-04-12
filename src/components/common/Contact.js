  import React from 'react';
  import axios from 'axios';
  import ScrollableAnchor, {goToTop, configureAnchors} from 'react-scrollable-anchor';

  import './Contact.css';

  configureAnchors({scrollDuration: 1000});

  class Contact extends React.Component {
      constructor(props) {
          super(props);
          this.state = {
              name: '',
              email: '',
              phone: '',
              message: '',
              errorMessage: 'No error'
          };
          this.onNameChange = this.onNameChange.bind(this);
          this.onEmailChange = this.onEmailChange.bind(this);
          this.onPhoneChange = this.onPhoneChange.bind(this);
          this.onMessageChange = this.onMessageChange.bind(this);
          this.onSendingForm = this.onSendingForm.bind(this);
          this.onSuccessSend = this.onSuccessSend.bind(this);
          this.onErrorSend = this.onErrorSend.bind(this);
      }

      onSendingForm(e) {

          e.preventDefault();

          const formContent = {
              "name": this.state.name,
              "email": this.state.email,
              "phone": this.state.phone,
              "message": this.state.message
          };

          axios.post('/message', formContent)
              .then(res => {
                  this.onSuccessSend();
              })
              .catch(err => {
                console.log(`${err}`);
                this.onErrorSend(err);
              });
      }

      onNameChange(e) {
          this.setState({name: e.target.value});
      }

      onEmailChange(e) {
          this.setState({email: e.target.value});
      }

      onPhoneChange(e) {
          this.setState({phone: e.target.value});
      }

      onMessageChange(e) {
          this.setState({message: e.target.value});
      }

      onSuccessSend() {
          this.successBlock.className = "successBlock-active";
              setTimeout(() => {
                  this.successBlock.className = "successBlock";
                  this.nameInput.value = '';
                  this.emailInput.value = '';
                  this.phoneInput.value = '';
                  this.messageInput.value = '';
                  goToTop();
              }, 2000);
      }

      onErrorSend(e) {
        this.setState({errorMessage: e.message}, () => this.errorBlock.className = "errorBlock-active");
          setTimeout(() => {
            this.errorBlock.className = "errorBlock";
            this.nameInput.value = '';
            this.emailInput.value = '';
            this.phoneInput.value = '';
            this.messageInput.value = '';
            goToTop();
          }, 5000);
      }

      render() {
          return (
              <ScrollableAnchor id={'contact'}>
                  <div id={"contactUs"}>
                      <p className="contactTitle">Contact Us</p>
                      <p className="contactInfo">hi-world@gmail.com<br/>+972.53.923.6229</p>
                      <form id="form" method="post" autoComplete={"off"}>
                          <input type="text" id="name" placeholder="NAME" onChange={this.onNameChange} ref={(input) => {
                              this.nameInput = input;
                          }}/>
                          <input type="text" id="email" placeholder="EMAIL" required onChange={this.onEmailChange}
                                 ref={(input) => {
                                     this.emailInput = input;
                                 }}/>
                          <input type="text" id="phone" placeholder="PHONE" onChange={this.onPhoneChange}
                                 ref={(input) => {
                                     this.phoneInput = input;
                                 }}/>
                          <input type="text" id="message" placeholder="MESSAGE" onChange={this.onMessageChange}
                                 ref={(input) => {
                                     this.messageInput = input;
                                 }}/>
                          <button type="submit" className="mb-4 btn btn-primary" onClick={this.onSendingForm}>Send
                          </button>
                      </form>
                      <div className = {"successBlock"} ref = {(div) => {
                          this.successBlock = div;
                      }}>
                          <img src={"images/success.png"} alt={"success"}/>
                      </div>
                      <div className = {"errorBlock"} ref = {(div) => {
                          this.errorBlock = div;
                      }}>
                        <p>{this.state.errorMessage}</p>
                      </div>
                  </div>
              </ScrollableAnchor>
          )
      }
  }

  export default Contact;
