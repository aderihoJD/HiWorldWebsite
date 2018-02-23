import React from 'react';
import {Link} from 'react-router-dom';


import './HeaderPrice.css';

class HeaderPrice extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            firstInput: '2',
            secondInput: '2',
            thirdInput: '2',
            finalPrice: 0,
            isFirstActive: false,
            isSecondActive: false,
            isThirdActive: false,
            isFourthActive: false,
            isFifthActive: false,
            isSixthActive: false,
            firstInputPreviousValue: '2',
            secondInputPreviousValue: '2',
            thirdInputPreviousValue: '2'
        };
        this.firstBlockActive = this.firstBlockActive.bind(this);
        this.secondBlockActive = this.secondBlockActive.bind(this);
        this.thirdBlockActive = this.thirdBlockActive.bind(this);
        this.getInputValue = this.getInputValue.bind(this);
        this.firstInputChange = this.firstInputChange.bind(this);
        this.secondInputChange = this.secondInputChange.bind(this);
        this.thirdInputChange = this.thirdInputChange.bind(this);
        this.fourthBlockActive = this.fourthBlockActive.bind(this);
        this.fifthBlockActive = this.fifthBlockActive.bind(this);
        this.sixthBlockActive = this.sixthBlockActive.bind(this);
        this.additionalBlocksShow = this.additionalBlocksShow.bind(this);
    }

    firstInputChange(value) {
        this.setState({firstInputPreviousValue: this.state.firstInput}, () => console.log(`Change previous on: ${this.state.firstInputPreviousValue}`));
        this.setState({firstInput: value});
        this.setState({finalPrice: this.state.finalPrice + this.getInputValue(this.firstBlockInput)});
    }

    secondInputChange(value) {
        this.setState({secondInputPreviousValue: this.state.secondInput}, () => console.log(`Change previous on: ${this.state.secondInputPreviousValue}`));
        this.setState({secondInput: value});
        this.setState({finalPrice: this.state.finalPrice + this.getInputValue(this.secondBlockInput)});
    }

    thirdInputChange(value) {
        this.setState({thirdInputPreviousValue: this.state.thirdInput}, () => console.log(`Change previous on: ${this.state.thirdInputPreviousValue}`));
        this.setState({thirdInput: value});
        this.setState({finalPrice: this.state.finalPrice + this.getInputValue(this.thirdBlockInput)});
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
            this.setState({finalPrice: this.state.finalPrice + this.getInputValue(this.firstBlockInput)});
            this.setState({secondInput: '2'});
            this.setState({thirdInput: '2'});
        } else {
            this.firstBlock.className = "blockContent";
            this.setState({finalPrice: this.state.finalPrice - this.getInputValue(this.firstBlockInput)});
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
            this.setState({finalPrice: this.state.finalPrice + this.getInputValue(this.secondBlockInput)});
            this.setState({firstInput: '2'});
            this.setState({thirdInput: '2'});
        } else {
            this.secondBlock.className = "blockContent";
            this.setState({finalPrice: this.state.finalPrice - this.getInputValue(this.secondBlockInput)});
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
            this.setState({finalPrice: this.state.finalPrice + this.getInputValue(this.thirdBlockInput)});
            this.setState({firstInput: '2'});
            this.setState({secondInput: '2'});
        } else {
            this.thirdBlock.className = "blockContent";
            this.setState({finalPrice: this.state.finalPrice - this.getInputValue(this.thirdBlockInput)});
            this.setState({thirdInput: '2'});
            this.firstBlockInput.disabled = true;
            this.secondBlockInput.disabled = true;
            this.thirdBlockInput.disabled = true;
        }

    }

    fourthBlockActive() {
        this.setState({isFourthActive: !this.state.isFourthActive}, () => console.log(`Fourth: ${this.state.isFourthActive}`));
        if (this.state.isFourthActive !== true) {
            this.fourthBlock.className = "blockContent-activeBlock";
            this.setState({finalPrice: this.state.finalPrice + 400});
        } else {
            this.fourthBlock.className = "blockContent";
            this.setState({finalPrice: this.state.finalPrice - 400});
        }

    }

    fifthBlockActive() {
        this.setState({isFifthActive: !this.state.isFifthActive}, () => console.log(`Fifth: ${this.state.isFifthActive}`));
        if (this.state.isFifthActive !== true) {
            this.fifthBlock.className = "blockContent-activeBlock";
            this.setState({finalPrice: this.state.finalPrice + 500});
        } else {
            this.fifthBlock.className = "blockContent";
            this.setState({finalPrice: this.state.finalPrice - 500});
        }

    }

    sixthBlockActive() {
        this.setState({isSixthActive: !this.state.isSixthActive}, () => console.log(`Sixth: ${this.state.isSixthActive}`));
        if (this.state.isSixthActive !== true) {
            this.sixthBlock.className = "blockContent-activeBlock";
            this.setState({finalPrice: this.state.finalPrice + 300});
        } else {
            this.sixthBlock.className = "blockContent";
            this.setState({finalPrice: this.state.finalPrice - 300});
        }

    }

    componentDidMount() {
        this.secondBlockActive();
    }

    additionalBlocksShow() {
        this.headerBlock.className = "priceStyle-active";
        this.addButton.className = "additionalBlocks-active";
        this.designFeatures.className = "designFeatures-active";

    }

    getInputValue(input) {
        const firstPrice = [1000, 2000, 3500];
        const secondPrice = [1000, 3000, 5000];
        const thirdPrice = [1000, 2000, 3500];
        if (input === this.firstBlockInput) {
            if (this.firstBlockInput.value === this.state.firstInputPreviousValue) {
                console.log(`From: ${firstPrice[this.state.firstInputPreviousValue - 1]}; (${this.state.firstInputPreviousValue}) To: ${firstPrice[this.firstBlockInput.value - 1]}; (${this.firstBlockInput.value})`);
                this.setState({firstInputPreviousValue: this.firstBlockInput.value});
                return firstPrice[this.firstBlockInput.value - 1];
            } else {
                console.log(`From: ${firstPrice[this.state.firstInputPreviousValue - 1]}; (${this.state.firstInputPreviousValue}) To: ${firstPrice[this.firstBlockInput.value - 1]}; (${this.firstBlockInput.value})`);
                this.setState({firstInputPreviousValue: this.firstBlockInput.value});
                return firstPrice[this.firstBlockInput.value - 1] - firstPrice[this.state.firstInputPreviousValue - 1];
            }
        }
        if (input === this.secondBlockInput) {
            if (this.secondBlockInput.value === this.state.secondInputPreviousValue) {
                console.log(`From: ${secondPrice[this.state.secondInputPreviousValue- 1]}; (${this.state.secondInputPreviousValue}) To: ${secondPrice[this.secondBlockInput.value - 1]}; (${this.secondBlockInput.value})`);
                this.setState({secondInputPreviousValue: this.secondBlockInput.value});
                return secondPrice[this.secondBlockInput.value - 1];
            } else {
                console.log(`From: ${secondPrice[this.state.secondInputPreviousValue- 1]}; (${this.state.secondInputPreviousValue}) To: ${secondPrice[this.secondBlockInput.value - 1]}; (${this.secondBlockInput.value})`);
                this.setState({secondInputPreviousValue: this.secondBlockInput.value});
                return secondPrice[this.secondBlockInput.value - 1] - secondPrice[this.state.secondInputPreviousValue- 1];
            }
        };
        if (input === this.thirdBlockInput) {
            if (this.thirdBlockInput.value === this.state.thirdInputPreviousValue) {
                console.log(`From: ${thirdPrice[this.state.thirdInputPreviousValue - 1]}; (${this.state.thirdInputPreviousValue}) To: ${thirdPrice[this.thirdBlockInput.value - 1]}; (${this.thirdBlockInput.value})`);
                this.setState({thirdInputPreviousValue: this.thirdBlockInput.value});
                return thirdPrice[this.thirdBlockInput.value - 1];
            } else {
                console.log(`From: ${thirdPrice[this.state.thirdInputPreviousValue- 1]}; (${this.state.thirdInputPreviousValue}) To: ${thirdPrice[this.thirdBlockInput.value - 1]}; (${this.thirdBlockInput.value})`);
                this.setState({thirdInputPreviousValue: this.thirdBlockInput.value});
                return thirdPrice[this.thirdBlockInput.value - 1] - thirdPrice[this.state.thirdInputPreviousValue- 1];
            }
        };
        return console.log("incorrect if");
    }

    render() {
        return (
            <header className={"priceStyle"} ref={(header) => {
                this.headerBlock = header;
            }}>
                <img src="images/logoP.png" alt={'logo'} className="logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Work</Link></li>
                        <li><a href='/#service'>About</a></li>
                        <li><Link to='/price'>Price</Link></li>
                        <li><a href='/#contact'>Contact</a></li>
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
                    <p className={'additionalBlocks'} onClick={this.additionalBlocksShow} ref={(p) => {
                        this.addButton = p;
                    }}>Design Features</p>
                    <div className={'designFeatures'} ref={(div) => {
                        this.designFeatures = div;
                    }}>
                        <div className={"block block-first"}>
                            <div className={"blockContent"} onClick={this.fourthBlockActive} ref={(div) => {
                                this.fourthBlock = div;
                            }}>
                                <img src={"price/LOGO.png"} alt={"android"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Logo Design</p>
                                </div>
                            </div>
                        </div>
                        <div className={"block block-second"}>
                            <div className={"blockContent"} onClick={this.fifthBlockActive} ref={(div) => {
                                this.fifthBlock = div;
                            }}>
                                <img src={"price/BRANDING.png"} alt={"website"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Branding</p>
                                </div>
                            </div>
                        </div>
                        <div className={"block block-third"}>
                            <div className={"blockContent"} onClick={this.sixthBlockActive} ref={(div) => {
                                this.sixthBlock = div;
                            }}>
                                <img src={"price/bcard.png"} alt={"card"}/>
                                <div className={"blockText"}>
                                    <p className={"fText"}>Business Card</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className={'finalPrice'}>$ {this.state.finalPrice}</p>
                </div>
            </header>
        )
    }
}

export default HeaderPrice;