import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import homepage from "./screens/homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={homepage}/>
            
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
