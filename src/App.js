import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Login from './pages/Login'
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
    return <Login changeUser={setUsername}/>
  }
  else {
    return (
      <Router>
        <PageWrapper logout={handleLogout}>
          <Route
            exact={true}
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/login"
            component={Login}
          />
        </PageWrapper>
      </Router>
    );
  }
}

export default App;
