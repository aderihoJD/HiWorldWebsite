import React from 'react';
import {Link} from 'react-router-dom';

import PriceBlock from './PriceBlock';
import './HeaderPrice.css';

const PRICE_BLOCKS = [
    {
        img: 'price/Android.png',
        text: 'Android App',
        alt: 'android',
        classImg: 'firstImg',
        prices: [1000, 2000, 3500],
        inputValue: '2',
    },
    {
        img: 'price/Web.png',
        text: 'Website',
        alt: 'website',
        classImg: 'secondImg',
        prices: [1000, 3000, 5000],
        inputValue: '2',
    },
    {
        img: 'price/IOS.png',
        text: 'IOS App',
        alt: 'ios',
        classImg: 'thirdImg',
        prices: [1000, 2000, 3500],
        inputValue: '2',
    },
];

const BLOCKS = [
    {
        img: 'price/bcard.png',
        text: 'Business Card',
        alt: 'card',
        classImg: 'fourthImg',
        price: 400,
    },
    {
        img: 'price/BRANDING.png',
        text: 'Branding',
        alt: 'branding',
        classImg: 'fifthImg',
        price: 500,
    },
    {
        img: 'price/LOGO.png',
        text: 'Logo Design',
        alt: 'logo',
        classImg: 'sixthImg',
        price: 300,
    }
];

class HeaderPrice extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenBlock: false,
            priceBlocks: PRICE_BLOCKS,
            activeBlocks: [PRICE_BLOCKS[1]],
        };
    }

    onBlockCLick = (block) => {
        const { activeBlocks, priceBlocks } = this.state;

        if (this.checkBlock(block)) {
            return this.setState({
                activeBlocks: activeBlocks.filter((ab) => ab !== block),
                priceBlock: priceBlocks.map(pb => {
                    if(pb === block) {
                        pb.inputValue = "2";
                    }
                    return pb;
                })
            });
        }

        return this.setState({
            activeBlocks: activeBlocks.concat(block),
        });
    }

    onInputChange = (priceBlock, inputValue) => {
        const { priceBlocks } = this.state;

        this.setState({
            priceBlocks: priceBlocks.map(pb => {
                if (pb === priceBlock) {
                    pb.inputValue = inputValue;
                }
                return pb;
            })
        })
    }

    getFinalPrice() {
        const {activeBlocks} = this.state;

        return activeBlocks.reduce((result, currentItem)=> {
            const price = currentItem.inputValue ? currentItem.prices[currentItem.inputValue-1] : currentItem.price;
            return result + price;
        }, 0);
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

    componentDidMount(){
      if (this._header.offsetWidth < 500) {
        this.setState({isOpenBlock: true});
        this.renderAdditionalBlock();
      }
    }

    render() {
        const { isOpenBlock, priceBlocks } = this.state;

        const pricesBlock = priceBlocks.map((pb, index) => <PriceBlock
            key={index}
            isActive={this.checkBlock(pb)}
            priceBlock={pb}
            onPriceBlockCLick={this.onBlockCLick}
            onInputChange={(value)=>this.onInputChange(pb, value)}
            hasInput={true}
        />);

        return (
            <header className={"priceStyle"} ref = {(header) => {this._header = header;}}>
                <img src="images/logoP.png" alt={'logo'} className="logo"/>
                <nav>
                    <ul>
                        <li><Link to='/'>Work</Link></li>
                        <li><a href='/#service'>About</a></li>
                        <li className={"priceButton"}><Link to='/price'>Price</Link></li>
                        <li><a href='/#contact'>Contact</a></li>
                    </ul>
                </nav>
                <div className="content">
                    <h1>Calculate Price</h1>
                    <div className={"wrapper"}>
                        {pricesBlock}
                    </div>
                    {!isOpenBlock ?
                    <p className={'additionalBlocks'} onClick={()=> this.setState({isOpenBlock: true})}>Design Features</p> :
                    this.renderAdditionalBlock()
                    }
                    <p className={'finalPrice'}>$ {this.getFinalPrice()}</p>
                </div>
            </header>
        )
    }
}

export default HeaderPrice;
