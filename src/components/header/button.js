import React, { Component } from 'react';



class Button extends Component {

    render() {


        return (
            <div className='nav-btn'>

                <button className='nav-btn-style' type='submit' onclick=''>{this.props.text}</button>
                
            </div>    
        );
    }

}

export default Button;