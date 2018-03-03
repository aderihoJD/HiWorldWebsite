import React from 'react';

import './PriceBlock.css';

class PriceBlock extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            inputValue: '2',
            inputPreviousValue: '2',
            isActiveBlock: false,
            img: props.img,
            text: props.text,
            alt: props.alt,
            hash: props.hash
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onBlockCLick = this.onBlockCLick.bind(this);
    }


    onInputChange(e) {///wtf with this value???
        let value = e.target.value;
        this.setState({inputPreviousValue: this.state.inputValue}, () => {
            this.setState({inputValue: value}, () => console.log(`Change previous on: ${this.state.inputValue}`));;
        });
    }

    onBlockCLick() {
        this.setState({isActiveBlock: !this.state.isActiveBlock}, () => {
            if (this.state.isActiveBlock === true) {
                this.block.className = "blockContent-activeBlock";
                this.inputBlock.disabled = false;
            } else {
                this.block.className = "blockContent";
                this.setState({inputValue: '2'}, () => {
                    console.log(this.state.inputValue);
                    this.forceUpdate();
                    this.inputBlock.disabled = true});
            }
        });
    }


    render() {
        return (
            <div className={"block"}>
                <div className={"blockContent"} onClick={this.onBlockCLick} ref={(div) => {
                    this.block = div;
                }}>
                    <img src={this.state.img} alt={this.state.alt}/>
                    <div className={"blockText"}>
                        <p className={"fText"}>{this.state.text}</p>
                        <p className={"sText"}>Design & Development</p>
                    </div>
                </div>
                <input type={"range"} key={this.state.hash} min={"1"} max={"3"} disabled={true} defaultValue={this.state.inputValue} step={"1"} onChange={(e) => {this.onInputChange(e)}} ref={(input) => {
                    this.inputBlock = input;
                }}/>
                <div className={"rangeLabels"}>
                    <p>Small</p>
                    <p>Average<br/>Size of project</p>
                    <p>Big</p>
                </div>
            </div>)
    }
}

export default PriceBlock;