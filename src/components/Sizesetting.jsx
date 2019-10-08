import React, { Component } from "react";

class Sizesetting extends Component {
  changeSize=value=>{
    this.props.onChangeSize(value);
  }
  render() {
   return (
  
    <div className="panel panel-warning">
        <div className="panel-heading">
          <h3 className="panel-title">Size:{this.props.size}</h3>
        </div>
        <div className="panel-body">
         <button type='submit' className='btn btn-success' onClick={()=>this.changeSize(2)}>Add</button>
         <button type='submit' className='btn btn-success' onClick={()=>this.changeSize(-2)}>Sub</button>
        </div>
    </div>
 
    
    );
  }
}

export default Sizesetting;
