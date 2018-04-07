import React, { Component } from "react";
import { Select, DatePicker, Checkbox, Button } from 'antd';
import TreeSelect from './Tree'
import './style.css';

// DatePicker - apagar após fazer funcionalidades
const { RangePicker } = DatePicker;

class Filter extends Component {
    
    state = {
        dateRange: null,
        companies: [],
        canal: [
            {
                email: false,
                chat: false
            }
        ],
    }

    // DatePicker
 /*    onDateRangeChange = (rangeSelected) => {
        console.log(rangeSelected)
        this.setState({
            dateRange: rangeSelected
        }, console.log(this.state.dateRange));
    } */

    // Checkbox 
/*     canalCheck = (ev) => {

        this.setState(prevState => ({
            
            email: prevState.email = ev    
             
            
        }))
        console.log(ev);
        console.log(this.state.canal[0].email);
    } */

    // Button Filtrar
/*     sendFilter = (ev) => {
        ev.preventDefault();
        const data = {
            cliente: [],
            canal: [],
            tempo: []
        }

        //this.state

        console.log('enviar filtros', this.state);
    } */

    render() {

        return (
            <div className="filter">
                <h3 className="filter-h3">Filtros:</h3>
                <div className="filter-box">
                    <span className="filter-title">Cliente:</span>
                    <TreeSelect />
                </div>

                <div className="filter-box">
                    <span className="filter-title">Período:</span>
                    <RangePicker value={this.state.dateRange} onChange={this.onDateRangeChange} />
                </div>

                <div className="filter-box filter-ch">
                    <span className="filter-title">Canal:</span>
                    <Checkbox onChange={this.canalCheck}>ChatBot-Freshdesk</Checkbox>
                    <Checkbox onChange={this.canalCheck}>E-mail</Checkbox>
                </div>

                <div className="filter-box filter-btn">
                    {/* <Button className="btn-filtrar" onClick={this.sendFilter}>Filtrar</Button> */}
                    <Button className="btn-redefinir" onClick={this.props.filtrarTodos}>Redefinir</Button>
                </div>
            </div>
        )
    }
}

export default Filter;