import React from 'react'
import Cell from './Cell'
import '../style/style.css'

class Gameboard extends React.Component{
  render(){
    let Cells=[];
    for(let i=1;i<=16;i++){
        Cells.push(<Cell sum={this.props.sum} select={this.props.select} location={i} key={i} onClick={(index)=>this.props.onClick(index)} />);
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

export default Gameboard;

//onClick={(index)=>this.props.onClick(index)}
