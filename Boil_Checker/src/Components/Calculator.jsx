import React from 'react'
import BoilingVerdict from './BoilingVerdict';
export default class Calculator extends React.Component{
    state = {
        tempareture:''
    };
    onTemparetureChange = (e) => {
        this.setState({
            tempareture: e.target.value
        });
    }
    render(){
        const {tempareture} = this.setState;
        return(
            <div>
            <fieldset>
                <legend>Enter Tempareture: </legend>
                <input type="text" value={tempareture} onClick={this.onTemparetureChange}/>
            </fieldset>
            <BoilingVerdict celsius={parseFloat(tempareture)}/>
            </div>
        );
    }
}