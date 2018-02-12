import React from 'react';

import './Info.css';

const Info = () => <div className="info">
    <div className="infoText">
        <div className={"addBlock"}>
            <p className="titleInfo">Lorem ipsum dolor</p>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nulla ullamcorper libero sit amet suscipit vehicula.
                Donec ultricies molestie finibus.
                Cras sed diam turpis ullamcorper iaculis.
            </p>
            <a href="/">view prices</a>
        </div>
    </div>
    <div className="imageBlock">
        <img src="images/Work_half.png" alt={"work"} className="infoImage"/>
    </div>
</div>;


export default Info;