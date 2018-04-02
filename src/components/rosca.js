import React, { Component } from 'react';
import { Doughnut } from 'react-chartjs-2'


const data = () => (
    {
        labels: [
            'BAML',
            'Itau',
            'Bradesco'
        ],
        datasets: [
            {
                data: [300, 50, 100],
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
    });

const options = {

    responsive: true,
    maintainAspectRatio: false,
    cutoutPercentage: 50,
    circumference: 1 * Math.PI,
    rotation: -1 * Math.PI

}


class Rosca extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data()
        }
    }


    render() {
        return (
            <div>
                <Doughnut data={this.state.data}
                    options={options}
                    width="500" height="250" />
            </div>
        );
    }
}

export default Rosca;