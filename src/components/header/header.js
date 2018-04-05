import React, { Component } from 'react';
import fepwebLogo from '../../fepwebLogo.png';
import List from './list.js';

class Header extends Component {


    render() {

        return (
            <div>
                <header className='header'>
                    <div className='logo'>
                        <img src={fepwebLogo} alt="Logotipo da FepWeb"></img>
                        <h1>DashBoard de Desempenho do Sistema de Resolução de Chamados</h1>
                    </div>

                    <List filtrarTodos={this.props.filtrarTodos} filtrar={this.props.filtrar}/>

                </header>

            </div>

        );
    }


}

export default Header;

