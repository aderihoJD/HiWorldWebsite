import React from 'react';
import {Link} from 'react-router-dom'
import {HashLink} from 'react-router-hash-link';

import './HeaderPrice.css';

class HeaderPrice extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {firstInput: '2', secondInput: '2', thirdInput: '2', finalPrice: '', isFirstActive: false, isSecondActive: false, isThirdActive: false};
        this.firstBlockActive = this.firstBlockActive.bind(this);
        this.secondBlockActive = this.secondBlockActive.bind(this);
        this.thirdBlockActive = this.thirdBlockActive.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.firstInputChange = this.firstInputChange.bind(this);
        this.secondInputChange = this.secondInputChange.bind(this);
        this.thirdInputChange = this.thirdInputChange.bind(this);
    }

    firstInputChange(value) {
        this.setState({firstInput: value});
        this.setState({finalPrice: this.getInputValue(this.firstBlockInput)});
    }

    secondInputChange(value) {
        this.setState({secondInput: value});
        this.setState({finalPrice: this.getInputValue(this.secondBlockInput)});
    }

    thirdInputChange(value) {
        this.setState({thirdInput: value});
        this.setState({finalPrice: this.getInputValue(this.thirdBlockInput)});
    }

    firstBlockActive() {
        this.secondBlock.className = "blockContent";
        this.thirdBlock.className = "blockContent";
        this.setState({isFirstActive: !this.state.isFirstActive}, () => console.log(`First: ${this.state.isFirstActive}`));
        // this.setState(prevState => ({
        //     isFirstActive: !prevState.isFirstActive
        // }));
        if (this.state.isFirstActive !== true) {
            this.firstBlock.className = "blockContent-activeBlock";
            this.firstBlockInput.disabled = false;
            this.secondBlockInput.disabled = true;
            this.thirdBlockInput.disabled = true;
            this.setState({finalPrice: this.getInputValue(this.firstBlockInput)});
            this.setState({secondInput: '2'});
            this.setState({thirdInput: '2'});
        } else {
            this.firstBlock.className = "blockContent";
            this.setState({finalPrice: '0'});
            this.setState({firstInput: '2'});
            this.firstBlockInput.disabled = true;
            this.secondBlockInput.disabled = true;
            this.thirdBlockInput.disabled = true;
        }
    }

    secondBlockActive() {
        this.firstBlock.className = "blockContent";
        this.thirdBlock.className = "blockContent";
        this.setState({isSecondActive: !this.state.isSecondActive}, () => console.log(`Second: ${this.state.isSecondActive}`));
        // this.setState(prevState => ({
        //     isSecondActive: !prevState.isSecondActive
        // }));
        if (this.state.isSecondActive !== true) {
            this.secondBlock.className = "blockContent-activeBlock";
            this.firstBlockInput.disabled = true;
            this.secondBlockInput.disabled = false;
            this.thirdBlockInput.disabled = true;
            this.setState({finalPrice: this.getInputValue(this.secondBlockInput)});
            this.setState({firstInput: '2'});
            this.setState({thirdInput: '2'});
        } else {
            this.secondBlock.className = "blockContent";
            this.setState({finalPrice: '0'});
            this.setState({secondInput: '2'});
            this.firstBlockInput.disabled = true;
            this.secondBlockInput.disabled = true;
            this.thirdBlockInput.disabled = true;
        }

    }

    thirdBlockActive() {
        this.firstBlock.className = "blockContent";
        this.secondBlock.className = "blockContent";
        this.setState({isThirdActive: !this.state.isThirdActive}, () => console.log(`Third: ${this.state.isThirdActive}`));
        // this.setState(prevState => ({
        //     isThirdActive: !prevState.isThirdActive
        // }));
        if (this.state.isThirdActive !== true) {
            this.thirdBlock.className = "blockContent-activeBlock";
            this.firstBlockInput.disabled = true;
            this.secondBlockInput.disabled = true;
            this.thirdBlockInput.disabled = false;
            this.setState({finalPrice: this.getInputValue(this.thirdBlockInput)});
            this.setState({firstInput: '2'});
            this.setState({secondInput: '2'});
        } else {
            this.thirdBlock.className = "blockContent";
            this.setState({finalPrice: '0'});
            this.setState({thirdInput: '2'});
            this.firstBlockInput.disabled = true;
            this.secondBlockInput.disabled = true;
            this.thirdBlockInput.disabled = true;
        }

    }

    componentDidMount() {
        this.secondBlockActive();
    }


    getInputValue(input) {
        const firstPrice = [100, 200, 300];
        const secondPrice = [400, 500, 600];
        const thirdPrice = [700, 800, 900];
        if (input === this.firstBlockInput) return firstPrice[this.firstBlockInput.value - 1];
        if (input === this.secondBlockInput) return secondPrice[this.secondBlockInput.value - 1];
        if (input === this.thirdBlockInput) return thirdPrice[this.thirdBlockInput.value - 1];
        return console.log("incorrect if");
    }

    render() {
        return (
            <header className={"priceStyle"}>
                <img src="images/logoP.png" alt={'logo'} className="logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Work</Link></li>
                        <li><HashLink to='/#services'>About</HashLink></li>
                        <li><Link to='/price'>Price</Link></li>
                        <li><HashLink to='/#contactUs'>Contact</HashLink></li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>Calculate Price</h1>
                    <div className={"wrapper"}>
                        <div className={"block block-first"}>
                            <div className={"blockContent"} onClick={this.firstBlockActive} ref={(div) => {
                                this.firstBlock = div;
                            }}>
                                <img src={"price/Android.png"} alt={"android"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Android App</p>
                                    <p className={"sText"}>Design & Development</p>
                                </div>
                            </div>
                            <input type={"range"} min={"1"} max={"3"} defaultValue={this.state.firstInput} step={"1"}
                                   onChange={this.firstInputChange} ref={(input) => {
                                this.firstBlockInput = input;
                            }}/>
                            <div className={"rangeLabels"}>
                                <p>Small</p>
                                <p>Average<br/>Size of project</p>
                                <p>Big</p>
                            </div>
                        </div>
                        <div className={"block block-second"}>
                            <div className={"blockContent"} onClick={this.secondBlockActive} ref={(div) => {
                                this.secondBlock = div;
                            }}>
                                <img src={"price/Web.png"} alt={"website"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Website</p>
                                    <p className={"sText"}>Design & Development</p>
                                </div>
                            </div>
                            <input type={"range"} min={"1"} max={"3"} defaultValue={this.state.secondInput} step={"1"}
                                   onChange={this.secondInputChange} ref={(input) => {
                                this.secondBlockInput = input;
                            }}/>
                            <div className={"rangeLabels"}>
                                <p>Small</p>
                                <p>Average<br/>Size of project</p>
                                <p>Big</p>
                            </div>
                        </div>
                        <div className={"block block-third"}>
                            <div className={"blockContent"} onClick={this.thirdBlockActive} ref={(div) => {
                                this.thirdBlock = div;
                            }}>
                                <img src={"price/IOS.png"} alt={"ios"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>IOS App</p>
                                    <p className={"sText"}>Design & Development</p>
                                </div>
                            </div>
                            <input type={"range"} min={"1"} max={"3"} defaultValue={this.state.thirdInput} step={"1"}
                                   onChange={this.thirdInputChange} ref={(input) => {
                                this.thirdBlockInput = input;
                            }}/>
                            <div className={"rangeLabels"}>
                                <p>Small</p>
                                <p>Average<br/>Size of project</p>
                                <p>Big</p>
                            </div>
                        </div>
                    </div>
                    <p className={'additionalBlocks'}>Design Features</p>
                    <p className={'finalPrice'}>$ {this.state.finalPrice}</p>
                </div>
            </header>
        )
    }
}

export default HeaderPrice;