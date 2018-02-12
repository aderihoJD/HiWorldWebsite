import React from 'react';
import {Link} from 'react-router-dom'
// import {HashLink} from 'react-router-hash-link';

import './Header.css';

class Header extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {firstInput: '2', secondInput: '2', thirdInput: '2'};
    }

    // render(){
    //     return (
    //         <header className={"indexStyle"}>
    //             <img src="images/logo.png" alt={'logo'} className="logo"/>
    //             <nav>
    //                 <ul>
    //                     <li><Link to='/'>Work</Link></li>
    //                     <li><Link to='/#services'>About</Link></li>
    //                     <li><Link to='/price'>Price</Link></li>
    //                     <li><Link to='/#contactUs'>Contact</Link></li>
    //                 </ul>
    //             </nav>
    //             <div className="content">
    //                 <h1>design &<br/> development</h1>
    //                 <p>Hi-World studio. We are Tel Aviv based hi-tech startup,<br/>specialized in design and software development</p>
    //                 <a className="contact" href='/'>Contact us</a>
    //                 <img src="images/arrow.png" alt={'arrow'} className="arrow"/>
    //             </div>
    //         </header>
    //     )
    // }

    render() {
        return (
            <header className={"priceStyle"}>
                <img src="images/logoP.png" alt={'logo'} className="logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Work</Link></li>
                        <li><Link to='/#services'>About</Link></li>
                        <li><Link to='/price'>Price</Link></li>
                        <li><Link to='/#contactUs'>Contact</Link></li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>Calculate Price</h1>
                    <div className={"wrapper"}>
                        <div className={"block block-first"}>
                            <div className={"blockContent"}>
                                <img src={"price/Android.png"} alt={"android"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Android App</p>
                                    <p className={"sText"}>Design & Development</p>
                                </div>
                            </div>
                            <input type={"range"} min={"1"} max={"3"} defaultValue={this.state.firstInput} step={"1"}
                                   onChange={value => this.setState({firstInput: value})}/>
                            <div className={"rangeLabels"}>
                                <p>Small</p>
                                <p>Average</p>
                                <p>Big</p>
                            </div>
                        </div>
                        <div className={"block block-second"}>
                            <div className={"blockContent"}>
                                <img src={"price/Web.png"} alt={"website"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Website</p>
                                    <p className={"sText"}>Design & Development</p>
                                </div>
                            </div>
                            <input type={"range"} min={"1"} max={"3"} defaultValue={this.state.secondInput} step={"1"}
                                   onChange={value => this.setState({secondInput: value})}/>
                            <div className={"rangeLabels"}>
                                <p>Small</p>
                                <p>Average</p>
                                <p>Big</p>
                            </div>
                        </div>
                        <div className={"block block-third"}>
                            <div className={"blockContent"}>
                                <img src={"price/IOS.png"} alt={"ios"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>IOS App</p>
                                    <p className={"sText"}>Design & Development</p>
                                </div>
                            </div>
                            <input type={"range"} min={"1"} max={"3"} defaultValue={this.state.thirdInput} step={"1"}
                                   onChange={value => this.setState({thirdInput: value})}/>
                            <div className={"rangeLabels"}>
                                <p>Small</p>
                                <p>Average</p>
                                <p>Big</p>
                            </div>
                        </div>
                    </div>
                    <p className={'additionalBlocks'}>Design Features</p>
                    <p className={'finalPrice'}>2999$</p>
                </div>
            </header>
        )
    }
}

export default Header;