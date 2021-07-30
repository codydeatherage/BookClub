import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';

import PageWrapper from './components/PageWrapper';
import LoginReplace from './components/LoginReplace';
import Home from './components/Home';
import Footer from './components/Footer';

class App extends Component {
  render(){
    return (
    <Router>
    <PageWrapper>
        <Route
          exact={true}
          path="/"
          component={Home}
        />
        <Route
          exact={true}
          path="/signUp"
          component={LoginReplace}
        />
     {/*    <Route
          exact={true}
          path="/discussion"
          
          src= "./assets/The_Da_Vinci_Code"
          component={Discussion}
        /> */}
      </PageWrapper>
      <Footer></Footer>
    </Router>
  );
    }
}

export default App;
