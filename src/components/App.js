import React, { Component } from 'react';
import PokeList from './PokeList';
import './styles/App.css'

export default class App extends Component { 
  constructor(){
    super();
    this.state = {};
  }

  render() {
    return(
      <div className="App">
        <PokeList></PokeList>
      </div>
    );
  }
}