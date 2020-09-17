import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import PageWrapper from './components/PageWrapper';
import LoginReplace from './components/LoginReplace';


class App extends Component {
  render(){
    return (
    <Router>
    <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={LoginReplace}
        />
      </PageWrapper>
    </Router>
  );
    }
}

export default App;
