import React from 'react';

import './PriceBlock.css';

class PriceBlock extends React.Component {
    constructor(props) {
        super(props);
      
        this.onInputChange = this.onInputChange.bind(this);
        this.onBlockCLick = this.onBlockCLick.bind(this);
    }


    onInputChange(e) {///wtf with this value???
        console.log('e', e.target.value);
    }

    onBlockCLick() {
        const { onPriceBlockCLick, priceBlock } = this.props;

        return onPriceBlockCLick(priceBlock);
    }


    render() {
        const { priceBlock: { img, alt, text, defaultInputValue }, isActive } = this.props;
        const className = isActive ? "blockContent-activeBlock": "blockContent";

        return (
            <div className={"block"}>
                <div className={className} onClick={this.onBlockCLick}>
                    <img src={img} alt={alt}/>
                    <div className={"blockText"}>
                        <p className={"fText"}>{text}</p>
                        <p className={"sText"}>Design & Development</p>
                    </div>
                </div>
                <input
                    type={"range"}
                    min={"1"}
                    max={"3"}
                    disabled={!isActive}
                    defaultValue={defaultInputValue}
                    step={"1"}
                    onChange={(e) => {this.onInputChange(e)}}
                />
                <div className={"rangeLabels"}>
                    <p>Small</p>
                    <p>Average<br/>Size of project</p>
                    <p>Big</p>
                </div>
            </div>)
    }
}

export default PriceBlock;