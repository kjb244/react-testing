import React, { Component } from 'react';
import Currency from './currency';
import Buttons from './buttons';
import { connect } from 'react-redux';

class View1 extends Component{
  state = {
    firstName: '',
    lastName: '',
    amount: ''
  };

  constructor(props){
    super(props);
    const { currView, routeMapping } = this.props;
    if(currView && routeMapping[currView]){

      Object.keys(routeMapping[currView].formData).map((e) => {
        if(e in this.state){
          this.state[e] = routeMapping[currView].formData[e];
        }
      });
    }
  }

  firstNameChange = (e) => {
    this.setState({firstName: e.target.value});
  };

  lastNameChange = (e) => {
    this.setState({lastName: e.target.value});
  };

  updateAmount = (e) => {
    this.setState({amount: e});
  };


  getState = () =>{
    return {...this.state}
  };

  onSubmit = () => {
    this.props.history.push('/view2');
  };

  render(){
    const topStyle={
      marginTop: '20px'
    };

    return(

      <div className="page">
        <div style={topStyle} className="row">
          <div className="small-12 columns medium-8 medium-centered">
            <h3>View 1</h3>
            <input type="text" placeholder="first name" value={this.state.firstName} onChange={this.firstNameChange}/>

            <input type="text" placeholder="last name" value={this.state.lastName} onChange={this.lastNameChange}/>
            <Currency placeholder='enter an amount' value={this.state.amount} updateField = {this.updateAmount}/>
            <Buttons formData={this.getState()}/>
          </div>
        </div>

      </div>
    )
  }
};

const mapStateToProps =state => {
  return{
    routes: state.routes,
    currView: state.currView,
    routeMapping: state.routeMapping
  }
};
export default connect(mapStateToProps)(View1);

