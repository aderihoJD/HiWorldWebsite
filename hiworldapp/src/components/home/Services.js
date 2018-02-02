import React from 'react';

import './Services.css';

const Services = () => <div id={"services"}>
<p className="title">Our Services</p>
    <div className="content">
<div className="blocksContainer">
        <div className="block">
            <img className="picture-first" alt={"web"} src="images/web.png"/>
            <p>Web design<br/>& development</p>
        </div>
        <div className="block">
            <img className="picture-first" alt={"app"} src="images/APP.png"/>
            <p>App design<br/>& software</p>
        </div>
        <div className="block">
            <img className="picture-first" alt={"branding"} src="images/Branding.png"/>
            <p>Brand identity<br/>& graphic design</p>
        </div>
</div>
    </div>
</div>;

export default Services;