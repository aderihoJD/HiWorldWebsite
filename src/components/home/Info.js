import React from 'react';
import {Link} from 'react-router-dom';

import './Info.css';

const Info = () => <div className="info">
    <div className="smallTitle">Lorem ipsum dolor</div>
    <div className="infoText">
        <div className={"addBlock"}>
            <p className="titleInfo">Lorem ipsum dolor</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla ullamcorper libero sit amet suscipit vehicula.
                Donec ultricies molestie finibus.
                Cras sed diam turpis ullamcorper iaculis.
            </p>
            <Link to='/price'>view prices</Link>
        </div>
    </div>
    <div className="imageBlock">
        <img src="images/Work_half.png" alt={"work"} className="infoImage"/>
    </div>
</div>;


export default Info;
