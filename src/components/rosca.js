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
                        '#3A077F',
                        '#6B3CAB',
                        '#7541BA',
                        '#884CD9',
                        '#9051E5',
                        '#9B57F7',
                        '#A05AFF'
                    ],
                    hoverBackgroundColor: [
                        '#FF6384',
                        '#36A2EB',
                        '#FFCE56',
                        '#36A2EB',
                        '#36A2EB',
                        '#36A2EB',
                        '#36A2EB'
                    ]
                }
            ]
        }
    }


    render() {

        this.props.chartData.labels = [];
        this.props.chartData.datasets[0].data = [];

        for (let i = 0; i < this.props.data.length; i++) {
            this.props.chartData.labels.push(this.props.data[i].nome)
            this.props.chartData.datasets[0].data.push(this.props.data[i].valor)
        }

        return (
            <div>
               
                <Doughnut data={this.props.chartData}
                    options={this.state}
                    width={500} height={250} redraw/>
            </div>
        );
    }
}

export default Rosca;