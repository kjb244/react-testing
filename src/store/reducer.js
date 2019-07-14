import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import browserHistory from '../components/browser-history';

class Reducer extends Component{
  state = {};
  constructor(props){
    super(props);
  }

  initialState = {
    routes: ['view1','view2','view3'],
    currView: null,
    routeMapping: {
      'view1': {
        next: 'view2',
        prev: null,
        formData: {}
      },
      'view2': {
        next: 'view3',
        prev: 'view1',
        formData: {}
      },
      'view3': {
        next: null,
        prev: 'view2',
        formData: {}
      }
    }
  };

  goToNextRoute(forward, newState, formData){
    const currRoute = !newState.currView ? 'view1': newState.currView;
    const routeMapping = newState.routeMapping[currRoute];
    let nextRoute;
    if(forward){
      nextRoute = routeMapping.next;
    } else {
      nextRoute = routeMapping.prev;
    }

    //todo merge with es6
    newState.currView = nextRoute;

    routeMapping.formData = formData;
    //todo not working hacked it for now with qs
    //browserHistory.push('/view2')
    document.querySelector(`[href="/${nextRoute}"]`).click();
  }

  reducer = (state=this.initialState, action) => {
    const newState = {...state};
    let formData;

    switch(action.type){
      case 'CLICK_NEXT':
        formData  = action.values.formData;
        this.goToNextRoute(true, newState, formData);
        break;
      case 'CLICK_PREV':
        formData  = action.values.formData;
        this.goToNextRoute(false, newState, formData);
        break;
      case 'AGE_DOWN':
        newState.age -= action.value;
        break;
    }
    return newState;
  };




}

const clazz = new Reducer();

export default clazz.reducer;