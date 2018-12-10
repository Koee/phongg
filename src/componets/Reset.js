import React, { Component } from 'react';



class Reset extends Component {
    //Cannot read property 'props' of undefined thif chi can bind or <giatri> = () =>

    onReset = ()=>{
        this.props.onReset(true);
    }
    render() {
        return (
            <button type="button" className="btn btn-primary" onClick={this.onReset}>reset</button>
        );
    }
}

export default Reset;
