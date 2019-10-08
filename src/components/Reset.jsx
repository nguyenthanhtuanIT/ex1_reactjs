import React, { Component } from "react";

class Reset extends Component {
  setDefault= (color,size)=>
  {
    this.props.color(color,size);
  }
  render() {
   return (
            <div>
            <button type='button' className='btn btn-primary' onClick={()=>this.setDefault('red',15)}>Reset</button>
          </div>  
    );
  }
}

export default Reset;
