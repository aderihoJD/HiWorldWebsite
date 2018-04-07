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
            priceBlock: { img, alt, text, defaultInputValue, classImg },
            isActive,
            onInputChange,
            hasInput
        } = this.props;
        const className = isActive ? "blockContent-activeBlock": "blockContent";

        return (
            <div className={"block"}>
                <div className={className} onClick={this.onBlockCLick}>
                    <img src={img} alt={alt} className={classImg}/>
                    <div className={"blockText"}>
                        <p className={"fText"}>{text}</p>
                        <p className={"sText"}>Design & Development</p>
                    </div>
                </div>
                {hasInput &&
                <InputCustom
                    isActive={isActive}
                    defaultValue={defaultInputValue}
                    onInputChange={onInputChange}
                />
                }
            </div>)
    }
}

export default PriceBlock;
