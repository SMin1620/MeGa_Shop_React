import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Products from './pages/Products';




function App() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route path="/products">
              <Products />
            </Route>
            <Route path="/mypage">
              <h1>My Page</h1>
            </Route>
            <Route path="/login">
              <h1>Login</h1>
            </Route>
            <Route path="/">
              <h1>Home</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }


export default App;