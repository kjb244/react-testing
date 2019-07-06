import React, { Component } from 'react';
import './App.css';
import { Route, Link, BrowserRouter, Switch } from 'react-router-dom';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import View1 from './components/view1';
import View2 from './components/view2';
import View3 from './components/view3';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div className="app">
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

export default App;
