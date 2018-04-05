import React, { Component } from 'react';
// import PropTypes from 'prop-types'
import { HorizontalBar } from 'react-chartjs-2'


// const options = {

//     responsive: true,
//     maintainAspectRatio: false

// }


class BarraHorizontal extends Component {

    // constructor(props) {
    //     super(props)
    //     this.state = {
    //         responsive: true,
    //         maintainAspectRatio: false
    //     }
    // this.state = {
    // labels: ['Email', 'ChatBot-Freshdesk'],
    // datasets: [
    //     {
    //         label: 'Resolvidos',
    //         backgroundColor: 'rgba(255,99,132,0.2)',
    //         borderColor: 'rgba(255,99,132,1)',
    //         borderWidth: 1,
    //         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //         hoverBorderColor: 'rgba(255,99,132,1)',
    //         data: [this.props.data.email.resolvidos, this.props.data.chatbot.resolvidos]
    //     },
    //     {
    //         label: 'Não-Resolvidos',
    //         backgroundColor: 'rgba(255,99,132,0.2)',
    //         borderColor: 'rgba(255,99,132,1)',
    //         borderWidth: 1,
    //         hoverBackgroundColor: 'rgba(255,99,132,0.4)',
    //         hoverBorderColor: 'rgba(255,99,132,1)',
    //         data: [this.props.data.email.não_resolvidos, this.props.data.chatbot.não_resolvidos]
    //     }
    // ]
    //     }


    // }
    // componentWillMount() {
    //     this.props.chartData.datasets[0].data = [this.props.data.email.resolvidos, this.props.data.chatbot.resolvidos];
    //     this.props.chartData.datasets[1].data = [this.props.data.email.não_resolvidos, this.props.data.chatbot.não_resolvidos];
    // }

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
                    data: [0, 0]
                },
                {
                    label: 'Não-Resolvidos',
                    backgroundColor: 'rgba(255,99,132,0.2)',
                    borderColor: 'rgba(255,99,132,1)',
                    borderWidth: 1,
                    hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                    hoverBorderColor: 'rgba(255,99,132,1)',
                    data: [0, 0]
                }
            ]
        }
    }

    state = {
        responsive: true,
        maintainAspectRatio: false
    }



    render() {
        // const d = this.props.data;
        this.props.chartData.datasets[0].data = [this.props.data.email.resolvidos, this.props.data.chatbot.resolvidos];
        this.props.chartData.datasets[1].data = [this.props.data.email.não_resolvidos, this.props.data.chatbot.não_resolvidos];
        
        console.log(this.props.data);
        console.log(this.props.data.email);

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