import React from 'react';
import { Link } from 'react-router-dom'

import './Footer.css';

const Footer = () => (
    <footer>
        <nav>
            <ul>
                <li><Link to='/'>Work</Link></li>
                <li><Link to='/'>About</Link></li>
                <li><Link to='/price'>Price</Link></li>
                <li><Link to='/'>Contact</Link></li>
            </ul>
        </nav>
        <p>hi-world@gmail.com</p>
        <div>
            <a className="fa fa-facebook-f">{}</a>
            <a className="fa fa-linkedin">{}</a>
        </div>
        <p>Tel Aviv, Israel</p>
        <p>All rights reserved &copy; Hi-World</p>
    </footer>
)

export default Footer;