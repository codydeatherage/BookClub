import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './App.css';

import PageWrapper from './components/PageWrapper'
import Dashboard from './pages/Dashboard';
import Home from './pages/Home'
import Login from './pages/Login'
import Profile from './pages/Profile'
const App = () => {

  const [username, setUsername] = useState('');
  const [user, setUser] = useState();

  const handleLogout = () => {
    setUser();
    setUsername('');
    localStorage.clear();
  }

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');
    if (loggedInUser) {
      console.log('user already logged in');
      const foundUser = (loggedInUser);
      setUser(foundUser);
    }
  }, [username]);

  if (!user) {
    return <Login changeUser={setUsername} />
  }
  else {
    return (
      <Router>
        <PageWrapper logout={handleLogout}>
          <Route
            exact={true}
            path="/"
            /* component={user ? <Dashboard/> : <Home/>} */
          >
          {user ? <Dashboard/> : <Home/>}
          </Route>
          <Route
            exact
            path="/login"/* 
            element={user <Login changeUser={setUsername}/>} */
          >
            {user ? <Redirect to="/" /> : <Login changeUser={setUsername} />}
          </Route>
          <Route
            exact
            path="/profile"
            component={Profile}
          />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
