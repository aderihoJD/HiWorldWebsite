import React from 'react';


import InputCustom from './InputCustom';
import './PriceBlock.css';

class PriceBlock extends React.Component {
    constructor(props) {
        super(props);

        this.onBlockCLick = this.onBlockCLick.bind(this);
    }

    onBlockCLick() {
        const { onPriceBlockCLick, priceBlock } = this.props;

        return onPriceBlockCLick(priceBlock);
    }

    render() {
        const {
            priceBlock: { img, alt, text, defaultInputValue },
            isActive,
            onInputChange
        } = this.props;
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
                <InputCustom
                    isActive={isActive}
                    defaultValue={defaultInputValue}
                    onInputChange={onInputChange}
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