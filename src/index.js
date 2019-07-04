import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'foundation-sites/dist/foundation.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import View1 from './components/view1';
import View2 from './components/view2';

const routing = (
  <Router>
    <div>
      <Route exact path="/" component={View1} />
      <Route path="/view1" component={View1} />
      <Route path="/view2" component={View2} />
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
