import React, { Component } from "react";
import { Header } from 'antd';
import fepwebLogo from '../../fepwebLogo.png';
import './style.css';

class Title extends Component {
    render() {
        return (
            <div className="header">
                <img src={fepwebLogo} alt="Logotipo da FepWeb"></img>
                <h1>Dashboard de Desempenho do Sistema de Resolução de Chamados</h1>
            </div>
        )
    }
}

export default Title;