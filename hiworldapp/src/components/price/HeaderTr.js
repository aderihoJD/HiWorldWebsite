import React from 'react';
import './HeaderTr.css';

class HeaderTr extends React.Component{
    constructor(props) {
        super(props);
        this.state = {finalPrice: '100', firstBlock: false, secondBlock: false};
        this.onFirstBlockClick = this.onFirstBlockClick.bind(this);
        this.onSecondBlockClick = this.onSecondBlockClick.bind(this);
    }

    onFirstBlockClick() {
        this.setState({firstBlock: !this.state.firstBlock});
        this.setState({secondBlock: false}, () => console.log(this.state));
    }

    onSecondBlockClick() {
        this.setState({secondBlock: !this.state.secondBlock});
        this.setState({firstBlock: false}, () => console.log(this.state));
    }

    render() {
        return (
            <header>
                <div className={"block"} onClick={this.onFirstBlockClick}>
                    <div className={"content"}>
                        sdfdsfdsfdsfdsfsdfdsfdsfsdfsdfdsfdsfdsfdsfdsfd
                        gfdgfgdfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfghg
                        gfhgfffffffffffffffffffffffffffffffffffffffhhg
                    </div>
                    <input type={"range"} min={"1"} max={"3"}/>
                </div>
                <div className={"block"} onClick={this.onSecondBlockClick}>
                    <div className={"content"}>
                        sdfdsfdsfdsfdsfsdfdsfdsfsdfsdfdsfdsfdsfdsfdsfd
                        gfdgfgdfhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhfghg
                        gfhgfffffffffffffffffffffffffffffffffffffffhhg
                    </div>
                    <input type={"range"} min={"1"} max={"3"}/>
                </div>
                <div className={"result"}>$ {this.state.finalPrice}</div>
            </header>
        )
    }
}

export default HeaderTr;