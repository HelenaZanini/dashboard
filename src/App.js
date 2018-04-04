import React, { Component } from 'react';
import './App.css';
import Header from './components/header/header.js';
import BarraHorinzontal from './components/barraHorizontal';
import Rosca from './components/rosca';

const API = "";

class App extends Component {

  state = {
    chamados: {
      Email: [],
      ChatBot: [],
      Clientes: [{nome: 'nome', valor: 'valor'}]
    }
  }

  listaChamados = () => {
    axios
    .get(`${API}/chamados`)
    .then(response => {
      this.setState({
        chamados: response.data,
      });
    })
    .catch(error => {
    });
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
