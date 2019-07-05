import React, { Component } from 'react';

class Currency extends Component{

  state = {};

  constructor(props){
    super(props);
    const value = props.value || '';
    this.state.value = value.length === 0 ? value : this.maskInput(value);
    this.state.placeholder = props.placeholder || 'enter amount';
  }

  handleOnChange = (e) => {
    const value = e.target.value;

    const masked = this.maskInput(value);

    this.setState({value: masked})
    this.props.updateField(masked);



  };

  handleOnBlur = (e) => {
    const value = e.target.value;
    const split = value.split('.');

    if(typeof split[1] !== 'undefined'){
      if(split[1].length === 0){
        const newValue = e.target.value.replace('.','')
        this.setState({value: newValue});
        this.props.updateField(newValue);
      }
      else if (split[1].length === 1){
        const newValue = e.target.value + '0';
        this.setState({value: newValue})
        this.props.updateField(newValue);
      }
    }
  };

  maskInput = (value) => {
    const periodSplitter = '.';
    const currencySign = '$';
    value = value.replace(/[^0-9.]/g,'');
    const firstPeriodIdx = value.indexOf(periodSplitter);
    if(firstPeriodIdx > -1){
      value = value.substr(0,firstPeriodIdx) + periodSplitter + value.substr(firstPeriodIdx+1).replace(/\./g,'');
    }

    const parts = value.split(periodSplitter);

    const parts1 = parts[0];
    let parts2 = parts[1];
    const newValue = parts1.split('').reverse().map((e,i) => {
      if(i >0 && i%3 === 0){
        return e + ',';
      }
      return e;
    }).reverse().join('');
    if(typeof parts2 === 'undefined') return currencySign + newValue;

    parts2 = periodSplitter + parts2.substr(0,2);
    return currencySign + newValue + parts2;

  };


  render(){
    return(
      <React.Fragment>
        <input type ="text"
               placeholder={this.state.placeholder}
               value={this.state.value}
               onChange={this.handleOnChange}
               onBlur={this.handleOnBlur}
        />
      </React.Fragment>
    )
  }
}

export default Currency;
