import React from 'react';

import Header from './common/Header';
import Main from './common/Main';
import Contact from './common/Contact';
import Footer from './common/Footer';

import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {fPath: props.history.location.pathname};
    }

    render(){
        return (<div>
            <Header path={this.state.fPath}/>
            <Main/>
            <Contact/>
            <Footer/>
        </div>)
    }

}


export default App