import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2'

class Rosca extends Component {

    state = {
        responsive: true,
        maintainAspectRatio: false,
        cutoutPercentage: 50,
        circumference: 1 * Math.PI,
        rotation: -1 * Math.PI
    }

    static defaultProps = {
        chartData: {
            labels: [],
            datasets: [
                {
                    data: [],
                    backgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56'
                    ]
                }
            ]
        }
    }


    render() {

        this.props.chartData.labels = [];
        this.props.chartData.datasets[0].data = [];

        for (let i = 0; i < this.props.data.clientes.length; i++) {
            this.props.chartData.labels.push(this.props.data.clientes[i].nome)
            this.props.chartData.datasets[0].data.push(this.props.data.clientes[i].valor)
        }

        return (
            <div>
                <Doughnut data={this.props.chartData}
                    options={this.state}
                    width={500} height={250} />
            </div>
        );
    }
}

export default Rosca;