import React from 'react';
import { Input } from 'reactstrap';

class InputCustom extends React.Component {
    render () {
        const { defaultValue, isActive, onInputChange } =  this.props;

        return (
            <div>
            <Input
                type={"range"}
                min={1}
                max={3}
                disabled={!isActive}
                value={defaultValue}
                step={"1"}
                onChange={(e) => {onInputChange(e.target.value)}}
            />
                <div className={"rangeLabels"}>
                    <p>Small</p>
                    <p>Average<br/>Size of project</p>
                    <p>Big</p>
                </div>
            </div>

        );
    }
}

export default InputCustom;