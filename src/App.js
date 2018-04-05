import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import './App.css';
import Header from './components/header/header.js';
import BarraHorinzontal from './components/barraHorizontal';
import Rosca from './components/rosca';

const API = "https://private-ae7eb-chart4.apiary-mock.com";
let params = {empresas: ["todas"], tipo: ["Email", "ChatBot"], tempo: ["inicio"]}

class App extends Component {

  state = {
    chamados: {
      email: {
        resolvidos: 50,
         não_resolvidos: 10
        },
      chatbot: {
        resolvidos: 25,
         não_resolvidos: 5
        },
      clientes: [
        {
        nome: 'nome',
         valor: 0
        }
      ]
    }
  }

  listaChamados = () => {
    axios.get(`${API}/chamados`, {
      params: {
        tipo: params.tipo,
        tempo: params.tempo,
        cliente: params.empresas
      },
      paramsSerializer: function(params) {
        return Qs.stringify(params, {arrayFormat: 'repeat'})
      },
    })
    .then(response => {
      console.log(response)
       this.setState({
        chamados: response.data,
      });
    })
    .catch(error => {
    });
  }

   

/*  componentWillMount() {     
    this.listaChamados();
  }*/

  filtrarTodos = (ev) => {
    console.log(ev);
    ev.preventDefault();

    this.listaChamados();
  }

  filtrar = () => {
    
    // Montar parametros da requisição
    this.listaChamados();
  }

  render() {
    
    const { chamados } = this.state;
    console.log(chamados)
    const {filtrar, filtrarTodos} = this;

    return (
      <div className="App">
        <Header filtrar={filtrar} filtrarTodos={filtrarTodos}/>
        <div className="pacote">

          <div className='Graficos'>
            <BarraHorinzontal chamados={chamados}/>
            <Rosca chamados={chamados}/>
          </div>

        </div>
      </div>
    );
  }
}

export default App;
