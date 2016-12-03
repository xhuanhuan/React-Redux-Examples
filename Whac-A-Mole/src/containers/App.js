import React,{Component} from 'react';
import { connect } from 'react-redux'
import Control from '../components/Control';
import Game_board from '../components/Game_board';
import Info from '../components/Info';
import {Generate_Mouse,Game_Over,Beat_Mouse,Pause} from '../actions/actions'

let timer;
let sum=0;
class App extends React.Component{
   handleClick(index){
    if(index==="start"){
      timer=setInterval(this.props.dispatch.bind(null,Generate_Mouse()),2000);
    }else if(index==="end"){
      clearInterval(timer);
      this.props.dispatch(Game_Over());
    }else if(index==="pause"){
      clearInterval(timer);
      this.props.dispatch(Pause());
    }
   }
  render(){
    const {dispatch,id,GameOver,success,sum}=this.props;
    return(
      <div>
        <Game_board select={id} onClick={(index)=>dispatch(Beat_Mouse(index))} />
        <div style={{clear:'left'}}></div>
        <Control onClick={(index)=>this.handleClick(index)} />
        <Info success={success} sum={sum} />
      </div>
    );
  }
}

function select(state){
  return{
    id:state.mouses.id,
    GameOver:state.mouses.GameOver,
    success:state.mouses.success,
    sum:state.mouses.sum,
    first:state.mouses.first
  }

}
export default connect(select)(App);
