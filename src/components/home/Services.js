import React from 'react';
import ScrollableAnchor, {configureAnchors} from 'react-scrollable-anchor';

import './Services.css';

configureAnchors({scrollDuration: 1000});

const Services = () => <ScrollableAnchor id={'service'}>
    <div id={"services"}>
    <p className="title">Our Services</p>
    <div className="content">
        <div className="blocksContainer">
            <div className="block">
                <img className="picture-first" alt={"web"} src="images/web.png"/>
                <p>Web design<br/>& development</p>
            </div>
            <div className="block">
                <img className="picture-second" alt={"app"} src="images/APP.png"/>
                <p>App design<br/>& software</p>
            </div>
            <div className="block">
                <img className="picture-third" alt={"branding"} src="images/Branding.png"/>
                <p>Brand identity<br/>& graphic design</p>
            </div>
        </div>
    </div>
</div>
</ScrollableAnchor>;

export default Services;