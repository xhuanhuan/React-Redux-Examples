import React, { Component } from 'react'
import {Generate_Mouse} from '../actions/actions'
import '../style/style.css'

class Control extends React.Component{
  endClick(e){
    this.props.onClick("end");
    let tips=this.refs.show;
    tips.style.display='block';
    setTimeout(function(){
               tips.style.display = 'none';
           }, 2000);
  }
  render(){
    return(
      <div className="control">
      <button className="start" onClick={()=>this.props.onClick("start")}>Start the Game</button>
      <button className="pause" onClick={()=>this.props.onClick("pause")}>pause Game</button>
      <button className="end" onClick={this.endClick.bind(this)}>end The Game</button>
      <div style={{clear:'left'}}></div>
      <p ref="show" className="showOver">Game Over</p>
      </div>

    );
  }
}

export default Control;
