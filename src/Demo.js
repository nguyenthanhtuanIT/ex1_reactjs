import React, { Component } from "react";
import './demo.css';
import Colorpicker from './components/Colorpicker';
import Reset from './components/Reset';
import Sizesetting from './components/Sizesetting';
import Result from './components/Result';
class Demo extends Component {
  constructor (props)
  {
      super(props);
      this.state = {
          diplay:'block',
          color:'red',
          fontSize:15
      };
  }

  setColor=(params)=>{
    this.setState({
      color:params
    });
  }

  onChangeSize=(value)=>{
    
    if(this.state.fontSize + value >= 8 && this.state.fontSize + value <= 36)
    {
      this.setState({
        fontSize:this.state.fontSize + value
      });
    }
   
  }
  reSet=(color,size)=>{
    this.setState({
      color:color,
      fontSize:size
    });
  }
  render() {
   return (
    <div className="container">
        <nav className="navbar navbar-inverse">
        <a className="navbar-brand" href ='/'>Project 1</a>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href ='/'>Home</a>
          </li>
          <li>
            <a href ='/'>Link</a>
          </li>
        </ul>
      </nav>
      <div className="row">
      <Colorpicker color={this.state.color} onReturn={this.setColor}></Colorpicker>
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <Sizesetting size={this.state.fontSize} onChangeSize={this.onChangeSize}></Sizesetting>
          <Reset color={this.reSet}></Reset>
      </div>
           <Result color={this.state.color} size={this.state.fontSize}></Result>
          </div>
      </div>
    );
  }
}

export default Demo;
