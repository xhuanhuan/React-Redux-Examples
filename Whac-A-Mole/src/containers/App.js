import React,{Component} from 'react';
import { connect } from 'react-redux'
import Control from '../components/Control';
import Game_board from '../components/Game_board';
import Info from '../components/Info';
import {Generate_Mouse,Game_Over,Beat_Mouse,Pause} from '../actions/actions';

let timer;
class App extends React.Component{
  generate(){
    this.props.dispatch(Generate_Mouse());
    if(this.props.sum==20){
      clearInterval(timer);
      setTimeout(()=>this.props.dispatch(Game_Over()),800);
    }
  }
   handleClick(index){
    if(index==="start"){
      timer=setInterval(this.generate.bind(this),1000);
    }else if(index==="pause"){
      clearInterval(timer);
      this.props.dispatch(Pause());
    }
   }
   handleGameboardClick(index){
     this.props.dispatch(Beat_Mouse(index));
     if(this.props.sum==20){
      this.refs.gameover.style.display="block";
      setTimeout(()=>this.refs.gameover.style.display="none",1000);
     }
   }
  render(){
    const {dispatch,id,GameOver,success,sum,first}=this.props;
      return(
        <div className="container">
        <p className="tittle"> Whac A Mouse</p>
        <div className="row">
        <div className="text-center col-xs-8 col-s-4 col-m-4 col-lg-4 col-xs-offset-2 col-s-offset-2 col-m-offset-2 col-lg-offset-2">
          <Game_board sum={sum} select={id} onClick={(index)=>this.handleGameboardClick(index)} />
          <div style={{clear:'left'}}></div>
          <Control sum={sum} onClick={(index)=>this.handleClick(index)} />
          <h3 ref="gameover" className="gameover">Game Over</h3>
        </div>
        <div className="text-center col-xs-8 col-s-4 col-m-4 col-lg-4 col-xs-offset-2 col-s-offset-0 col-m-offset-0 col-lg-offset-0">
          <Info success={success} sum={sum} />
        </div>
        </div>
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
