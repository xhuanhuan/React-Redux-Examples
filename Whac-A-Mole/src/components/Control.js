import React, { Component } from 'react'
import {Generate_Mouse} from '../actions/actions'
import '../style/style.css'

class Control extends React.Component{
  handleStartClick(){
    this.refs.start.disabled='disabled';
    this.props.onClick("start");
  }
  render(){
    return(
      <div className="control">
      <button ref="start" className="start btn btn-info" onClick={this.handleStartClick.bind(this)}>Start Game</button>
      <button className="pause btn btn-success" onClick={()=>{this.refs.start.disabled='';this.props.onClick("pause")}}>Pause / Reset</button>
      <div style={{clear:'left'}}></div>
      </div>
    );
  }
}

export default Control;
