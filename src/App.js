import React, { Component } from 'react';
import Color from './componets/Color'
import Size from './componets/Size'
import Reset from './componets/Reset'
import Show from './componets/Show'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
      this.state={
        color: "blue",
        fontSize: 15
      };
      // neu gap error this.section... not function nghia la bo khong hieu dinh dang ta dung bind
      // this.onSetColor=this.onSetColor.bind(this);c1
  }
// bang cach chuyen thang
  onSetColor = (params) =>{
    // console.log(params);
    this.setState({
      color : params 
    });
  }

  onChangeSize = (value)=>{
    if(this.state.fontSize + value >=6 && this.state.fontSize + value <=38){
      this.setState({
        fontSize : this.state.fontSize + value
      });
    }

  }

  onReset= (value)=>{
    // console.log(value);
    if(value){
      this.setState({
        color:"blue",
        fontSize:15
      });
    }
  }


  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <Color color={this.state.color} onReceiveColor={this.onSetColor}/>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <Size fontSize={this.state.fontSize}
             onChangeSize={this.onChangeSize}
             />
            <Reset reSet onReset={this.onReset} />
          </div>
          {/* pj cha tao props de chuyen ve cho cac Component con */}
          <Show color={this.state.color} fontSize={this.state.fontSize}/>
        </div>
      </div>
    );
  }
}

export default App;
