import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { HorizontalBar } from 'react-chartjs-2'


class BarraHorizontal extends Component {

    state = {
        responsive: true,
        maintainAspectRatio: false
    }

    static defaultProps = {
        chartData: {
            labels: ['Email', 'ChatBot-Freshdesk'],
            datasets: [
                {
                    label: 'Resolvidos',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: []
                },
                {
                    label: 'Não-Resolvidos',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: []
                }
            ]
        }
    }

    render() {

        this.props.chartData.datasets[0].data[0] = this.props.data.email.resolvidos;
        this.props.chartData.datasets[1].data[0] = this.props.data.email.não_resolvidos;
        this.props.chartData.datasets[0].data[1] = this.props.data.chatBot.resolvidos;
        this.props.chartData.datasets[1].data[1] = this.props.data.chatBot.não_resolvidos;
        
        return (
            <div>
                <HorizontalBar data={this.props.chartData}
                    options={this.state}
                    width={500} height={250} redraw />
            </div>
        );
    }
}

export default BarraHorizontal;