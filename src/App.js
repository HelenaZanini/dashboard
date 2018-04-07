import React, { Component } from 'react';

// Dependencias do projeto
// import Header from './components/header/header.js';
import Title from './components/header/Header';
import Filter from './components/nav/Navbar';
import BarraHorinzontal from './components/barraHorizontal';
import Rosca from './components/rosca';
import './App.css';

// Dependencias externas
import axios from 'axios';
import Qs from 'qs';

const API = "https://private-ae7eb-chart4.apiary-mock.com";
// const API = "https://sleepy-retreat-40862.herokuapp.com";
let params = { cliente: ["todas"], canal: ["Email", "ChatBot"], tempo: ["inicio"] }

class App extends Component {

  state = {
    loading: false,
    data: ''
  }

  // Realiza a requisição padrão (variavel params) antes do componente renderizar 
  componentWillMount() {

    console.log('1');
    this.setState({ loading: true });
    this.listaChamados(params)

  }

  // Requisição unica do projeto, 
  // recebe os parametros da requisição como "dados", retorna um setState 
  // alterando a propriedade data do estado do componente passando os dados de retorno da requisição    
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

        console.log('3');
        this.setState({
          data: response.data,
          loading: false
        });
      })

      .catch(error => {
      });
  }


  // Metodo para o botão redefinir, realiza a requisição padrão (variavel params)
  filtrarTodos = (ev) => {

    ev.preventDefault();
    this.setState({ loading: true });
    this.listaChamados(params);
  }

  // Metodo para o botão redefinir, realiza a requisição baseada nas listas de seleção (altera a variavel params)
  filtrar = (data) => {

    console.log(data);

    params = {
      cliente: data.cliente,
      canal: data.canal,
      tempo: data.tempo
    };

    console.log(params);
    this.setState({ loading: true });
    this.listaChamados(params);
  }

  render() {

    const { filtrar, filtrarTodos } = this;

    if (this.state.loading) {
      console.log("olar");
      return <h2>Carregando...</h2>;
    }

    console.log("4");
    console.log(this.state.data);
    return (
      <div className="App">
        {/* <Header filtrar={filtrar} filtrarTodos={filtrarTodos} data={this.state.data} /> */}
        <Title />
        <Filter filtrar={filtrar} filtrarTodos={filtrarTodos} data={this.state.data}/>
        
        <div className="pacote">

          <div className='Graficos'>
            
            <BarraHorinzontal data={this.state.data} />
            <Rosca data={this.state.data.clientes} />
          </div>

        </div>
      </div>
    );
  }

}
export default App;

