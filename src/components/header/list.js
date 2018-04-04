import React, { Component } from 'react';
import Button from './button.js';


const cliente = ['BAML', 'Itau BBA', 'Bradesco', 'BTG Pactual', 'ING', 'HSBC', 'Santander', 'Deutsche Bank'];
const tipo = ['ChatBot-Freshdesk', 'Email'];    
const date = ['Periodo inicial: ', 'Periodo final: '];

class List extends Component {

    render() {
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
                        {cli}
                    </ul>

                    <ul className='nav-list'>
                        {tip}
                    </ul>

                    <ul className='nav-list'>
                        {dat}
                    </ul>

                    <Button text="Filtrar dados" />

                    <Button text="Limpar filtro" />

                </nav>

            </div>

        );

    }

}

export default List;