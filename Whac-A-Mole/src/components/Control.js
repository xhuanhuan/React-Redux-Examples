import React, { Component } from 'react'
import {Generate_Mouse} from '../actions/actions'
import '../style/style.css'

class Control extends React.Component{
  render(){
    return(
      <div className="control">
      <button className="start btn-primary" onClick={()=>this.props.onClick("start")}>Start the Game</button>
      <button className="pause btn-success" onClick={()=>this.props.onClick("pause")}>pause Game</button>
      <div style={{clear:'left'}}></div>
      </div>
    );
  }
}

export default Control;
