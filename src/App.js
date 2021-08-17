import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import PageWrapper from './components/PageWrapper';
import LoginReplace from './components/LoginReplace';
import Home from './components/Home';
import api from './api/index'
import Footer from './components/Footer';
import Login from './pages/Login'
const App = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const user = { username, password };
    if (username && password) {

      setUser(user);
      api.createAccount(user).then(() =>{
        localStorage.setItem('user', user);
      })
    }
    else{
      window.alert('please enter username/password');
    }
  }

  const handleLogout = () => {
    setUser();
    setUsername('');
    setPassword('');
    localStorage.clear();
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      console.log('user already logged in');
      const foundUser = (loggedInUser);
      setUser(foundUser);
    }
  }, []);

  if (!user) {
    return <Login changeUser={setUsername} changePass={setPassword} login={handleSubmit} />
  }
  else {
    return (
      <Router>
        <PageWrapper changeUser={setUsername} changePass={setPassword} logout={handleLogout}>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          {/*       <Route
            exact={true}
            path="/signUp"
            component={LoginReplace}
          /> */}
          <Route
            exact
            path="/login"
            component={Login}
          />
          {/*    <Route
          exact={true}
          path="/discussion"
          
          src= "./assets/The_Da_Vinci_Code"
          component={Discussion}
        /> */}
        </PageWrapper>
        {/*        <Footer></Footer> */}
      </Router>
    );
  }
}

export default App;
