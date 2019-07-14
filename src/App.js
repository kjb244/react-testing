import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import View1 from './components/view1';
import View2 from './components/view2';
import View3 from './components/view3';
import { connect } from 'react-redux';


class App extends Component {



  render() {
    return(
      <BrowserRouter>
        <div className="app">
          <ul className="hide">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/view1">About</Link>
            </li>
            <li>
              <Link to="/view2">Topics</Link>
            </li>
            <li>
              <Link to="/view3">Topics</Link>
            </li>
          </ul>
          <Route render={ ({location}) => {
            return (
              <TransitionGroup>
                <CSSTransition key={location.key} timeout={500} classNames="fade">
                  <Switch location={location}>
                    <Route exact path="/" component={View1}/>
                    <Route path="/view1" component={View1}/>
                    <Route path="/view2" component={View2}/>
                    <Route path="/view3" component={View3}/>
                  </Switch>
                </CSSTransition>
              </TransitionGroup>
            )
          }}/>

        </div>
      </BrowserRouter>

    )
  }
}

  const mapStateToProps =state => {
    return{
      age: state.age
    }
  };

  const mapDispatchToProps = dispatch => {
    return {
      onAgeUp: ()=> dispatch({type: 'AGE_UP', value: 1}),
      onAgeDown: () => dispatch({type: 'AGE_DOWN', value: 1})
    }
  };


export default connect(mapStateToProps, mapDispatchToProps)(App);
