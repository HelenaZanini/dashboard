import React, { Component } from 'react';



class Button extends Component {

    httpRequest = (ev) => {

        ev.preventDefault();

        if (this.props.text === "Limpar filtro") {

            this.props.filtrarTodos();

        } else {

            this.props.filtrar();

        }
    }

    render() {

        return (
            <div className='nav-btn'>

                <button className='nav-btn-style' type='submit' onclick={this.httpRequest}>{this.props.text}</button>

            </div>
        );
    }

}

export default Button;