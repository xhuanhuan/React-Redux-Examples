import React, { Component } from 'react'
import Cell from './Cell'
import {Beat_Mouse} from '../actions/actions'
import '../style/style.css'

class Game_board extends React.Component{
  render(){
    let Cells=[];
    for(let i=1;i<=9;i++){
        Cells.push(<Cell select={this.props.select} location={i} key={i} onClick={(index)=>this.props.onClick(index)} />);

    }
    return(
      <div className="Game_board">
      {
        Cells
      }
      </div>
    );
  }
}

export default Game_board;
