import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Component } from "react";
import homepage from "./screens/homepage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import newGame from "./screens/newGame";
import instructions from "./screens/instructions";
import highscores from "./screens/highscores";


class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route exact path="/" component={homepage}/>
            <Route exact path="/start" component={newGame}/>
            <Route exact path="/instructions" component={instructions}/>
            <Route exact path="/highscores" component={highscores}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
