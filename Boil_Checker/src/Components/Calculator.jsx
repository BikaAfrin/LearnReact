import React from 'react'
import BoilingVerdict from './BoilingVerdict';
export default class Calculator extends React.Component{
    state = {
        tempareture:'',
    };
    onTemperatureChange = (e) => {
        this.setState({
            tempareture: e.target.value,
        });
    };
    render(){
        const {tempareture} = this.state;
        return(
            <div>
            <fieldset>
                <legend>Enter Tempareture: </legend>
                <input type="text" value={tempareture} onChange={this.onTemperatureChange}/>
            </fieldset>
            <BoilingVerdict celsius={parseFloat(tempareture)}/>
            </div>
        );
    }
}