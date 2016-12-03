import React, {Component} from 'react'

class Cell extends React.Component{
  render(){
    const location=this.props.location;
    const select=this.props.select;
    if(select===location){
      return(
        <div className="mouse" onClick={this.props.onClick.bind(null,location)}>
        </div>
      );
    }else{

    return(
      <div className="Cell" onClick={this.props.onClick.bind(null,location)}>
      </div>
    );
  }
  }
}
export default Cell;
//onClick={this.props.onClick.bind(null,location)}
