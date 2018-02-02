import React from 'react';
import { Link } from 'react-router-dom'
// import {HashLink} from 'react-router-hash-link';

import './Header.css';


const Header = () => (
    <header>
        <img src="images/logo.png" alt={'logo'} className="logo"/>
        <nav>
            <ul>
                <li><Link to='/'>Work</Link></li>
                <li><Link to='/#services'>About</Link></li>
                <li><Link to='/price'>Price</Link></li>
                <li><Link to='/#contactUs'>Contact</Link></li>
            </ul>
        </nav>
        <div className="content">
            <h1>design &<br/> development</h1>
            <p>Hi-World studio. We are Tel Aviv based hi-tech startup,<br/>specialized in design and software development</p>
            <a className="contact" href='/'>Contact us</a>
            <img src="images/arrow.png" alt={'arrow'} className="arrow"/>
        </div>
    </header>
)

export default Header;