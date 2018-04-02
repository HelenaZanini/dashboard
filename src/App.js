import React, { Component } from 'react';
import './App.css';
import BarraHorinzontal from './components/barraHorizontal'
import Rosca from './components/rosca'

class App extends Component {
  render() {
    return (
      <div className="App">
          <BarraHorinzontal />
          <Rosca />
      </div>
    );
  }
}

export default App;
