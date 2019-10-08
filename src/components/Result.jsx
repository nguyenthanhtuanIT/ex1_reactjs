import React, { Component } from "react";

class Result extends Component {
  setStyle=()=>{
    return {
      color:this.props.color,
      fontSize:this.props.size
    };

  }
  render() {
    
   return (
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <p>color:{this.props.color}-fontsize:{this.props.size}px</p>
            <div style={
              this.setStyle()
            }>
              content setting
            </div>
          </div>  
    );
  }
}

export default Result;
