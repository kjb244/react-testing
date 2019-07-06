import React, { Component } from 'react';
import Currency from './currency';
class View2 extends Component{
  state = {
    firstName: '',
    lastName: '',
    amount: ''
  };

  firstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  };

  lastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  };

  updateAmount = (e) => {
    this.setState({amount: e});
  };

  onSubmit = () => {
    this.props.history.push('/view3');
  };

  render(){
    const topStyle={
      marginTop: '20px'
    };

    return(
      <div className="page">
        <div style={topStyle} className="row">
          <div className="small-12 columns medium-8 medium-centered">
            <h3>View 2</h3>
            <input type="text" placeholder="first name" value={this.state.firstName} onChange={this.firstNameChange}/>

            <input type="text" placeholder="last name" value={this.state.lastName} onChange={this.lastNameChange}/>
            <Currency placeholder='enter an amount' value='' updateField = {this.updateAmount}/>
            <a className="button" onClick={this.onSubmit}>Submit</a>
          </div>
        </div>
      </div>
    )
  }
};

export default View2;
