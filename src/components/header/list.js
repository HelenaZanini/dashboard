import React, { Component } from 'react';


const tipo = ['ChatBot-Freshdesk', 'Email'];
const date = ['Periodo inicial: ', 'Periodo final: '];

class List extends Component {

    handleFiltrar = (ev) => {
        
        ev.preventDefault();
        
        const data = {
            cliente: [],
            canal: [],
            tempo: []
        }
        
        //this.state...


        
        this.props.filtrar(data);
    }

    render() {
        
        const cliente = [];
        for (let i = 0; i < this.props.data.length; i++) {
            cliente.push(this.props.data[i].nome)
            
        }      
        
        const cli = [];
        const tip = [];
        const dat = [];

        for (let i = 0; i < cliente.length; i++) {

            cli.push(<li><input type='checkbox'></input>{cliente[i]}</li>)

        }

        for (let i = 0; i < tipo.length; i++) {

            tip.push(<li><input type='checkbox'></input>{tipo[i]}</li>)

        }

        for (let i = 0; i < date.length; i++) {

            dat.push(<li>{date[i]}<input type='date'></input></li>)

        }

        return (
            <div>

                <nav className='nav'>

                    <ul className='nav-list'>
                        <li><input type='checkbox'></input>Todos</li>
                        {cli}
                    </ul>

                    <ul className='nav-list'>
                        <li><input type='checkbox'></input>Todos</li>
                        {tip}
                    </ul>

                    <ul className='nav-list'>
                        <li>Do inicio: <input type='checkbox'></input></li>
                        {dat}
                    </ul>

                    <button className='nav-btn-style' type='submit' onClick={this.handleFiltrar}>Filtrar dados</button>

                    <button className='nav-btn-style' type='submit' onClick={this.props.filtrarTodos}>Limpar filtro</button>

                </nav>

            </div>

        );

    }

}

export default List;