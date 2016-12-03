import React, {Component} from 'react'

class Cell extends React.Component{
  handleClick(){
    this.props.onClick(this.props.location);
    setTimeout(this.refs.mouse.className="Cell",200);
  }
  render(){
    const location=this.props.location;
    const select=this.props.select;
    if(select===location){
      return(
        <div ref="mouse" className="mouse" onClick={this.handleClick.bind(this)}>
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
//onClick={(location)=>this.props.onClick(location)}
//onClick={this.props.onClick.bind(null,location)
