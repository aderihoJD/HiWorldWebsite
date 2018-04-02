import React from 'react';

import Main from './common/Main';
import Footer from './common/Footer';

import './App.css';

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {fPath: props.history.location.pathname};
    }

    render(){
        return (<div>
            <Main/>
            <Footer/>
        </div>)
    }

}


export default App