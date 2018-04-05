import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';
import './App.css';
import Header from './components/header/header.js';
import BarraHorinzontal from './components/barraHorizontal';
import Rosca from './components/rosca';

const API = "https://private-ae7eb-chart4.apiary-mock.com";
let params = { cliente: [], canal: [], tempo: [] }

class App extends Component {

  // constructor(props) {
  //   super(props);
  //   params = {
  //     cliente: ["todas"],
  //     canal: ["Email", "ChatBot"],
  //     tempo: ["inicio"]
  //   };
  //   this.listaChamados(params);
  //   this.state = {
  //     data: {
  //       email: {
  //         resolvidos: 50,
  //         não_resolvidos: 10
  //       },
  //       chatbot: {
  //         resolvidos: 25,
  //         não_resolvidos: 5
  //       },
  //       clientes: [
  //         {
  //           nome: 'nome',
  //           valor: 0
  //         }
  //       ]
  //     }
  //   }
  // }

  // state = {
  //   data: {
  //     email: {
  //       resolvidos: 50,
  //       não_resolvidos: 10
  //     },
  //     chatbot: {
  //       resolvidos: 25,
  //       não_resolvidos: 5
  //     },
  //     clientes: [
  //       {
  //         nome: 'nome',
  //         valor: 0
  //       }
  //     ]
  //   }
  // }

  static defaultProps = {
    data: {
      email: {
        resolvidos: 0,
        não_resolvidos: 0
      },
      chatbot: {
        resolvidos: 0,
        não_resolvidos: 0
      },
      clientes: [
        {
          nome: '',
          valor: 0
        }
      ]
    }
  }

  componentWillMount() {
    params = {
      cliente: ["todas"],
      canal: ["Email", "ChatBot"],
      tempo: ["inicio"]
    };
    this.listaChamados(params);

  }

  listaChamados = (dados) => {
    axios.get(`${API}/chamados`, {
      params: {
        canal: dados.canal,
        tempo: dados.tempo,
        cliente: dados.cliente
      },
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'repeat' })
      },
    })
      .then(response => {
        console.log(dados);
        
        this.props.data.email.resolvidos = response.data.email.resolvidos;
        this.props.data.email.não_resolvidos = response.data.email.resolvidos;
        this.props.data.chatbot.resolvidos = response.data.email.resolvidos;
        this.props.data.chatbot.não_resolvidos = response.data.email.resolvidos;

      })

      .catch(error => {
      });
  }

  filtrarTodos = (ev) => {

    ev.preventDefault();
    params = {
      cliente: ["todas"],
      canal: ["Email", "ChatBot"],
      tempo: ["inicio"]
    };

    this.listaChamados(params);
  }

  filtrar = (ev) => {

    ev.preventDefault();

    // Montar parametros da requisição aqui

    params = {
      cliente: ["blob"],
      canal: [],
      tempo: []
    };
    console.log(params);
    this.listaChamados(params);
  }

  render() {
    console.log(this.props.data);
    const { filtrar, filtrarTodos } = this;

    return (
      <div className="App">
        <Header filtrar={filtrar} filtrarTodos={filtrarTodos} />
        <div className="pacote">

          <div className='Graficos'>
            <BarraHorinzontal data={this.props.data} />
            <Rosca data={this.props.data} />
          </div>

        </div>
      </div>
    );
  }

}
export default App;

