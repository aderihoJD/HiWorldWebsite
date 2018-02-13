import React from 'react';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';

import './HeaderError.css';

class HeaderHome extends React.Component {

    render() {
        return (
            <header className={"errorStyle"}>
                <img src="images/logo.png" alt={'logo'} className="logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Work</Link></li>
                        <li><HashLink to='/#services'>About</HashLink></li>
                        <li><Link to='/price'>Price</Link></li>
                        <li><HashLink to='/#contactUs'>Contact</HashLink></li>
                    </ul>
                </nav>
                <div className="content">
                    <div className={"textContent"}>
                        <h1>&laquo;404&raquo;</h1>
                        <p>Unknown page</p>
                        <a className="contact" href='/'>GO HOME</a>
                    </div>
                    <div className={"imageContent"}>
                        <img src={"error/icon.png"} alt={'icon'}/>
                    </div>
                </div>
            </header>
        )
    }

}

export default HeaderHome;