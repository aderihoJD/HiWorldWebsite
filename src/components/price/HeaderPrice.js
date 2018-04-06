import React from 'react';
import {Link} from 'react-router-dom';

import PriceBlock from './PriceBlock';
import './HeaderPrice.css';

const PRICE = {
    android: [100, 200, 300],
    website: [400, 500, 600],
    ios: [700, 800, 900],
    card: 1,
    branding: 2,
    logo: 3,
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
    },
];

const BLOCKS = [
    {
        img: 'price/bcard.png',
        text: 'Business Card',
        alt: 'card',
    },
    {
        img: 'price/BRANDING.png',
        text: 'Branding',
        alt: 'branding',
    },
    {
        img: 'price/LOGO.png',
        text: 'Logo Design',
        alt: 'logo',
    }
];

class HeaderPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            finalPrice: PRICE.website[1],
            activePriceBlock: PRICE_BLOCKS[1],
            isOpenBlock: false,
            activeBlocks: [],
        };

        this.onBlockCLick = this.onBlockCLick.bind(this);
        this.onInputChange = this.onInputChange.bind(this);
        this.onPriceBlockCLick = this.onPriceBlockCLick.bind(this);

    }

    onPriceBlockCLick(priceBlock) {
        const {activePriceBlock} = this.state;

        this.setState({
            activePriceBlock: activePriceBlock !== priceBlock ? priceBlock: null,
            finalPrice: this.getFinalPrice(priceBlock),
        });

        PRICE_BLOCKS.forEach((pb)=> {
            pb.defaultInputValue = 2;
        });
    }

    onBlockCLick(block) {
       const {activeBlocks, finalPrice} = this.state;

       if(this.checkBlock(block)) {
           return this.setState({
               activeBlocks: activeBlocks.filter((ab) => ab !== block),
               finalPrice: finalPrice - PRICE[block.alt],
           });
       }

       this.setState({
           activeBlocks: activeBlocks.concat(block),
           finalPrice: finalPrice + PRICE[block.alt]
       });
    }

    onInputChange(inputValue) {
        const {activePriceBlock} = this.state;

        activePriceBlock.defaultInputValue = inputValue;

        this.setState({
            finalPrice: this.getFinalPrice(null, inputValue),
        });
    }

    getFinalPrice(priceBlock, inputValue=2) {
        const { activeBlocks, activePriceBlock } = this.state;
        const cost = priceBlock ? priceBlock.alt: activePriceBlock.alt;

        if(!activeBlocks.length) {
            return activePriceBlock !== priceBlock ?
                PRICE[cost][inputValue-1] : 0;
        }


        const priceByBlocks = activeBlocks.map((ab)=> PRICE[ab.alt])
            .reduce((sum, current)=> sum + current, 0);

        return priceByBlocks + (activePriceBlock !== priceBlock ? PRICE[cost][inputValue-1] : 0);
    }

    checkBlock(block) {
        const { activeBlocks } = this.state;

        return activeBlocks.filter(ab => ab === block).length;
    }

    renderAdditionalBlock() {
      const blocks = BLOCKS.map((b, index)=> <PriceBlock
          key={index}
          isActive={this.checkBlock(b)}
          priceBlock={b}
          onPriceBlockCLick={this.onBlockCLick}
          hasInput={false}
      />);

        return (
        <div className={"wrapper"}>
            {blocks}
        </div>);
    }

    render() {
        const { isOpenBlock } = this.state;

        const priceBlocks = PRICE_BLOCKS.map((pb, index) => <PriceBlock
            key={index}
            isActive={this.state.activePriceBlock === pb}
            priceBlock={pb}
            onPriceBlockCLick={this.onPriceBlockCLick}
            onInputChange={this.onInputChange}
            hasInput={true}
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
                    {!isOpenBlock ?
                    <p className={'additionalBlocks'} onClick={()=> this.setState({isOpenBlock: true})}>Design Features</p> :
                    this.renderAdditionalBlock()
                    }
                    <p className={'finalPrice'}>$ {this.state.finalPrice}</p>
                </div>
            </header>
        )
    }
}

export default HeaderPrice;