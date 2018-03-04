import React from 'react';
import {Link} from 'react-router-dom';


import PriceBlock from './PriceBlock';
import './HeaderPrice.css';

const PRICE = {
    android: [100, 200, 300],
    website: [400, 500, 600],
    ios: [700, 800, 900]
};

const PRICE_BLOCKS = [
    {
        img: 'price/Android.png',
        text: 'Android App',
        alt: 'android',
        defaultInputValue: '2',
    },
    {
        img: 'price/Web.png',
        text: 'Website',
        alt: 'website',
        defaultInputValue: '2',
    },
    {
        img: 'price/IOS.png',
        text: 'IOS App',
        alt: 'ios',
        defaultInputValue: '2',
    }
];

class HeaderPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalPrice: PRICE.website[1],
            activeBlock: PRICE_BLOCKS[1],
        };

        this.onInputChange = this.onInputChange.bind(this);
        this.onPriceBlockCLick = this.onPriceBlockCLick.bind(this);
    }

    onPriceBlockCLick(priceBlock) {
        const {activeBlock} = this.state;

        this.setState({
            activeBlock: activeBlock !== priceBlock ? priceBlock: null,
            finalPrice: PRICE[priceBlock.alt][1],
        });
    }

    onInputChange(inputValue) {
        const {activeBlock: {alt}} = this.state;

        this.setState({
            finalPrice: PRICE[alt][inputValue - 1]
        });
    }

    render() {
        const priceBlocks = PRICE_BLOCKS.map((pb, index) => <PriceBlock
            key={index}
            isActive={this.state.activeBlock === pb}
            priceBlock={pb}
            onPriceBlockCLick={this.onPriceBlockCLick}
            onInputChange={this.onInputChange}
        />);

        return (
            <header className={"priceStyle"}>
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
                        {priceBlocks}
                    </div>
                    <p className={'additionalBlocks'}>Design Features</p>
                    <p className={'finalPrice'}>$ {this.state.finalPrice}</p>
                </div>
            </header>
        )
    }
}

export default HeaderPrice;