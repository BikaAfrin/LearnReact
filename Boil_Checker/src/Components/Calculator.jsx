import React from 'react'

export default class Calculator extends React.Component{
  state(){
    tempareture: ''
  };
  onTemparetureChange = (e) => {
    this.setState({
      tempareture: e.target.value
    });
  }
  render(){
    const {tempareture} = this.state;
    return(
      <fieldset>
        <legend>Enter Tempareture: </legend>
        <input type='text' value={tempareture} onChange={this.onTemparetureChange}/>
      </fieldset>
    );
  }
    
}