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
  render(){
    const {dispatch,id,GameOver,success,sum}=this.props;
      return(
        <div className="row">
        <div style={{border:'1px solid black',paddingLeft:'8%'}} className="col col-xs-10 col-s-5 col-m-5 col-lg-5 col-xs-offset-1 col-s-offset-1 col-m-offset-1 col-lg-offset-1">
          <Game_board select={id} onClick={(index)=>dispatch(Beat_Mouse(index))} />
          <Control sum={sum} onClick={(index)=>this.handleClick(index)} />
        </div>
        <div className="col col-xs-10 col-s-5 col-m-5 col-lg-5 col-xs-offset-1 col-s-offset-0 col-m-offset-0 col-lg-offset-0">
          <Info success={success} sum={sum} />
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
//  timer=setInterval(this.props.dispatch.bind(null,Generate_Mouse()),2000);
