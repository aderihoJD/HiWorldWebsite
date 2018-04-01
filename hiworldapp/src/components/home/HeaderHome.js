import React from 'react';
import {Link} from 'react-router-dom'


import './HeaderHome.css';

class HeaderHome extends React.Component {


    render() {
        return (
            <header className={"indexStyle"}>
                <img src="images/logo.png" alt={'logo'} className="logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Work</Link></li>
                        <li><a href='/#service'>About</a></li>
                        <li><Link to='/price'>Price</Link></li>
                        <li className="contactButton"><a href='/#contact'>Contact</a></li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>design &<br/> development</h1>
                    <p>Hi-World studio. We are Tel Aviv based hi-tech startup,<br/>specialized in design and software
                        development</p>
                    <a className="contact" href='/#contact'>Contact us</a>
                    <img src="images/arrow.png" alt={'arrow'} className="arrow" href={''}/>
                </div>
            </header>
        )
    }

}

export default HeaderHome;
