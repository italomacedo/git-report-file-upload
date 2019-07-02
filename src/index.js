import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import NonDisclosureAgreement from './NonDisclosureAgreement';
import MainForm from './MainForm';
import FindLog from './FindLog';
import * as serviceWorker from './serviceWorker';

const routing = (
  <Router basename={'/git-report-upload'}>
    <div>
	  <Route exact path="/" component={App} />
      <Route path="/nondisclosureagreement" component={NonDisclosureAgreement} />
      <Route path="/mainform" component={MainForm} />
	  <Route path="/findlog" component={FindLog}/>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
