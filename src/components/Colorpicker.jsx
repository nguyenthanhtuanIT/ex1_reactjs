import React, { Component } from "react";

class Colorpicker extends Component {

    constructor (props)
    {
        super(props);
        this.state = {
            colors:['red','green', 'blue'],
        };
    }

    showColor(color)
    {
       return {
        backgroundColor:color,
       } ;
    }
    setActiveColor(color)
    {
      this.props.onReturn(color);
    }
  render() {
      var elmcolor = this.state.colors.map((color,index) =>{
          return <span 
            key={index} 
            style={this.showColor(color)} 
            className={this.props.color === color ? 'active' : ''}
            onClick={()=>this.setActiveColor(color)}></span>
      });
   return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <div className="panel panel-warning">
              <div className="panel-heading">
                <h3 className="panel-title">Color picker</h3>
              </div>
              <div className="panel-body">
              {elmcolor}
               <hr></hr>
              </div>
          </div>
        </div>    
    );
  }
}

export default Colorpicker;
