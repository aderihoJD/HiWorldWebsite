import React from 'react';

class InputCustom extends React.Component {


    render () {
        const { defaultValue, isActive, onInputChange } =  this.props;

        console.log('whst', defaultValue);
        return (
            <input
                type={"range"}
                min={"1"}
                max={"3"}
                disabled={!isActive}
                defaultValue={defaultValue}
                step={"1"}
                onChange={(e) => {onInputChange(e.target.value)}}
            />
        );
    }
}

export default InputCustom;