import React, { Component } from 'react';
import { connect } from 'react-redux';

class Buttons extends Component{
  state = {

  };

  constructor(props){
    super(props);

  }


  showPrev = () =>{
    const { currView, routeMapping } = this.props;
    if(!currView){
      return 'button hide';
    }
    if(!routeMapping[currView].prev){
      return 'button hide';
    }
    return 'button';
  };

  showNext = () =>{
    const { currView, routeMapping } = this.props;
    if(!currView){
      return 'button';
    }
    if(!routeMapping[currView].next){
      return 'button hide';
    }
    return 'button';
  };



  render(){


    return(
      <div className="">
        <button style={{marginRight: '10px'}} className={this.showPrev()} onClick={this.props.clickPrev}>Prev</button>
        <button className={this.showNext()} onClick={this.props.clickNext}>Next</button>
      </div>
    )
  }
}

const mapStateToProps =state => {
  return{
    routes: state.routes,
    currView: state.currView,
    routeMapping: state.routeMapping
  }
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    clickNext: ()=> dispatch({type: 'CLICK_NEXT', values: props}),
    clickPrev: ()=> dispatch({type: 'CLICK_PREV', values: props})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Buttons);


