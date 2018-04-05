import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2'


const options = {

    responsive: true,
    maintainAspectRatio: false

}


class BarraHorizontal extends Component {
    
    constructor(props) {
        super(props)
        this.state = {
            data: {
                labels: ['Email', 'ChatBot-Freshdesk'],
                datasets: [
                    {
                        label: 'Resolvidos',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [this.props.chamados.email.resolvidos, this.props.chamados.chatbot.resolvidos]
                    },
                    {
                        label: 'Não-Resolvidos',
                        backgroundColor: 'rgba(255,99,132,0.2)',
                        borderColor: 'rgba(255,99,132,1)',
                        borderWidth: 1,
                        hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                        hoverBorderColor: 'rgba(255,99,132,1)',
                        data: [this.props.chamados.email.não_resolvidos, this.props.chamados.chatbot.não_resolvidos]
                    }
                ]
            }
        }

    }
    
    
    

    render() {
        const { chamados } = this.props;
        console.log(chamados);
        console.log(this.props.chamados.email.resolvidos);
        

        

        return (
            <div>
                <HorizontalBar data={this.state.data}
                    options={options}
                    width={500} height={250}/>
            </div>
        );
    }
}

export default BarraHorizontal;