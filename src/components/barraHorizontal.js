import React, { Component } from 'react';
import { HorizontalBar } from 'react-chartjs-2'


const data = () => (
    {
        labels: ['Email', 'ChatBot-Freshdesk'],
        datasets: [
            {
                label: 'Resolvidos',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [64, 24]
            },
            {
                label: 'Não-Resolvidos',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [20, 8]
            }
        ]
    });

const options = {

    responsive: true,
    maintainAspectRatio: false

}


class BarraHorizontal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data()
        }
            
    }

    render() {
        return (
            <div>
                <HorizontalBar data={this.state.data}
                    options={options}
                    width="500" height="250" />
            </div>
        );
    }
}

export default BarraHorizontal;