import React, { Component } from 'react';



class Color extends Component {
    // tao chuoi mau o day
    constructor(props){
        super(props);
        this.state={
            colors :['red','green','blue','orange','pink','silver']
        };
    }
    showColor(color){
        // console.log(color); hiển thị show test ra man destop
        // console.log(this.props.color);
        return{
            backgroundColor : color 
        };
    }

    setActiveColor(color){
        // console.log(color);
        this.props.onReceiveColor(color); 
    }

    render() {
        var doimau=this.state.colors.map((color, index) => {
           return <span 
            key={index}
            style={this.showColor(color)}
            className={this.props.color === color ? 'action':''}
            onClick={ ()=>this.setActiveColor(color)}
            ></span>
        });
        return (
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3 className="panel-title">Pick Color</h3>
                    </div>
                    <div className="panel-body">
                        {doimau}
                    </div>
                </div>
            </div>
        );
    }
}

export default Color;
