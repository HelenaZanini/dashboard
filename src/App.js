import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js';
import BarraHorinzontal from './components/barraHorizontal';
import Rosca from './components/rosca';

class App extends Component {

  props = {
    chamados: {

    }
  }

  listaChamados = () => {

  }

  componentDidMount() {
    this.listaChamados();
  }



  render() {

    const { chamados } = this.props;


    return (
      <div className="App">
        <Header />
        <div className="pacote">

          <div className='Graficos'>
            <BarraHorinzontal />
            <Rosca />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
